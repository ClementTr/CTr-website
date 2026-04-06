import PersonalData from './PersonalData.json';
import mapData from './MapData.js';
import { buildTravelYearIndex } from './travelYearData';
import { mapColors } from './mapColors';
import { DEFAULT_VIEW, TILE_ATTRIBUTION, TILE_URL, WORLD_BOUNDS } from './leafletConfig';
import React from 'react';
import L from 'leaflet';

const { yearToCountries, years } = buildTravelYearIndex(PersonalData);
const HIGHLIGHT = mapColors.yearHighlight;
const EMPTY = mapColors.yearEmpty;

/** Année affichée par défaut si elle existe dans les voyages. */
const DEFAULT_YEAR = 2024;

function getDefaultYearIndex () {
  if (years.length === 0) return 0;
  const idx = years.indexOf(DEFAULT_YEAR);
  if (idx >= 0) return idx;
  return years.indexOf(Math.max(...years));
}

const defaultYearIndex = getDefaultYearIndex();

export default class YearMap extends React.Component {
  constructor (props) {
    super(props);
    this.mapEl = React.createRef();
    this.state = { yearIndex: defaultYearIndex };
    this.map = null;
    this.geojson = null;
  }

  styleFeature (feature) {
    const year = years[this.state.yearIndex];
    const name = feature.properties.name;
    const set = yearToCountries[year];
    const active = set && set.has(name);
    return {
      fillColor: active ? HIGHLIGHT : EMPTY,
      weight: 0.1,
      opacity: 1,
      color: mapColors.stroke,
      fillOpacity: 1,
    };
  }

  componentDidMount () {
    const el = this.mapEl.current;
    if (!el || years.length === 0) return;

    const b = WORLD_BOUNDS;
    const map = (this.map = L.map(el, {
      zoomControl: false,
      center: [0, -1],
      zoom: 1,
      layers: [
        L.tileLayer(TILE_URL, {
          attribution: TILE_ATTRIBUTION,
          maxZoom: 6,
          minZoom: 2,
        }),
      ],
    }));

    const bounds = L.latLngBounds(L.latLng(b[0][0], b[0][1]), L.latLng(b[1][0], b[1][1]));
    map.setMaxBounds(bounds);
    map.on('drag', function () {
      map.panInsideBounds(bounds, { animate: false });
    });
    map.setView(DEFAULT_VIEW.center, DEFAULT_VIEW.zoom);

    const legend = L.control({ position: 'bottomleft' });
    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      div.innerHTML = '<i style="background:' + HIGHLIGHT + '"></i> Visited this year';
      return div;
    };
    legend.addTo(map);

    this.geojson = L.geoJson(mapData, {
      style: (feature) => this.styleFeature(feature),
      onEachFeature: (feature, layer) => {
        layer.on({
          mouseover: (e) => {
            const l = e.target;
            l.setStyle({
              weight: 1.5,
              color: mapColors.strokeHover,
              dashArray: '',
              fillOpacity: 0.75,
            });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
              l.bringToFront();
            }
          },
          mouseout: (e) => {
            e.target.setStyle(this.styleFeature(e.target.feature));
          },
        });
      },
    }).addTo(map);

    map.fitWorld();
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.yearIndex !== this.state.yearIndex && this.geojson) {
      this.geojson.eachLayer((layer) => {
        layer.setStyle(this.styleFeature(layer.feature));
      });
    }
  }

  componentWillUnmount () {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }

  goPrev = () => {
    this.setState((s) => ({ yearIndex: Math.max(0, s.yearIndex - 1) }));
  };

  goNext = () => {
    this.setState((s) => ({
      yearIndex: Math.min(years.length - 1, s.yearIndex + 1),
    }));
  };

  onSelectYear = (e) => {
    const y = Number(e.target.value);
    const idx = years.indexOf(y);
    if (idx >= 0) this.setState({ yearIndex: idx });
  };

  render () {
    if (years.length === 0) return null;

    const year = years[this.state.yearIndex];
    const count = yearToCountries[year] ? yearToCountries[year].size : 0;
    const atStart = this.state.yearIndex <= 0;
    const atEnd = this.state.yearIndex >= years.length - 1;

    const countriesThisYear = Array.from(yearToCountries[year] || []).sort((a, b) =>
      a.localeCompare(b, 'en', { sensitivity: 'base' }),
    );

    const countryWord = count === 1 ? 'country' : 'countries';

    return (
      <div className="map-page-inner section-chrono-map">
        <h3 className="chrono-map-title">By year</h3>
        <p className="chrono-map-subtitle">
          Countries visited in the selected year: {count} {countryWord}.
        </p>
        <div className="chrono-map-toolbar">
          <button
            type="button"
            className="chrono-map-btn"
            onClick={this.goPrev}
            disabled={atStart}
            aria-label="Previous year"
          >
            &lt;
          </button>
          <label className="chrono-map-year-label" htmlFor="chrono-year-select">
            <span className="sr-only">Year</span>
            <select
              id="chrono-year-select"
              className="chrono-map-select"
              value={year}
              onChange={this.onSelectYear}
            >
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="chrono-map-btn"
            onClick={this.goNext}
            disabled={atEnd}
            aria-label="Next year"
          >
            &gt;
          </button>
        </div>
        <div ref={this.mapEl} className="map map-chrono" />
        <div className="chrono-countries-table-wrap">
          <h4 className="chrono-countries-table-title">Countries visited in {year}</h4>
          <div className="table-responsive">
            <table className="table table-sm table-bordered chrono-countries-table">
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="chrono-countries-col-num">#</th>
                  <th scope="col">Country</th>
                </tr>
              </thead>
              <tbody>
                {countriesThisYear.map((country, i) => (
                  <tr key={country}>
                    <td className="chrono-countries-col-num">{i + 1}</td>
                    <td>{country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
