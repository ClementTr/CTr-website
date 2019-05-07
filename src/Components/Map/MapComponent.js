import PersonalData from './PersonalData.json';
import ReactDOM from 'react-dom';
import React from 'react';
import L from 'leaflet';

let map_data = require('./MapData.js').default;
let markers = []
let zoom = false

function distinct(value, index, self) {
    return self.indexOf(value) === index;
}

function getPurposeContries(data, purpose){
  let purpose_countries = data.travels.filter(e => e.purpose === purpose);
  purpose_countries = purpose_countries.map(obj => {
    return obj.country;
  });
  purpose_countries = purpose_countries.filter(distinct)
  return purpose_countries
}
const work_countries = getPurposeContries(PersonalData, 'work')
const studies_countries = getPurposeContries(PersonalData, 'studies')
const visited_countries = getPurposeContries(PersonalData, 'visit')

function getColor(name) {
  if(work_countries.includes(name)){
    return "#E0848C"
  }else if(studies_countries.includes(name)){
    return "#669E8F"
  }else if(visited_countries.includes(name)){
    return '#517FA3'
  }else{
    return '#DEE4E8';
  }
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.name),
    weight: 0.1,
    opacity: 1,
    color: 'grey',
    fillOpacity: 1
  };
}


class Map extends React.Component {

    componentDidMount() {
      /* START VARIABLES */
      let map = this.map = L.map(ReactDOM.findDOMNode(this), {
          'zoomControl': false,
          'center': [0, 0],
          'zoom': 1.5,
          'layers': [
            L.tileLayer(
              'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',{
              attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
              maxZoom: 6,
              minZoom: 2
            })
          ],
        });
        let southWest = L.latLng(-60, -180),
            northEast = L.latLng(89, 180);
        let bounds = L.latLngBounds(southWest, northEast);
        map.setMaxBounds(bounds);
        map.on('drag', function() {
            map.panInsideBounds(bounds, { animate: false });
        });
        map.setView([40, -7], 2.5);

        let geojson;
        geojson = L.geoJson(map_data, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);

        let info = L.control();
        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
        };
        info.update = function (props) {
            this._div.innerHTML = '<h4>Country</h4>' +  (props ?
                '<b>' + props.name + '</b>'
                : 'Hover over a country');
        };
        info.addTo(map);

        let legend = L.control({position: 'bottomright'});
        legend.onAdd = function (map) {
            let div = L.DomUtil.create('div', 'info legend'),
                grades = ["Visit", "Work", "Studies"],
                colors = ["#084677", "#E0848C", "#669E8F"];
            // loop through our density intervals and generate a label with a colored square for each interval
            for (let i = 0; i < grades.length; i++) {
                div.innerHTML += '<i style="background:' + colors[i] + '"></i> ' + grades[i]
                if(i !== grades.length-1){
                  div.innerHTML += '<br><br>'
                }
            }
            return div;
        };
        legend.addTo(map);

        let description = document.getElementById("descriptionId");

        map.on('click', this.onMapClick);
        map.fitWorld();
        /* END VARIABLES */

        function overMap(e) {
          let layer = e.target;

          layer.setStyle({
              weight: 1.5,
              color: '#666',
              dashArray: '',
              fillOpacity: 0.7
          });

          if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
              layer.bringToFront();
          }

          info.update(layer.feature.properties);
        }

        function outMap(e) {
            geojson.resetStyle(e.target);
            info.update();
        }

        function clickMap(e) {
          let country = e.target.feature.properties.name
          if(zoom === false){
            if(country === "France"){
              map.setView([40, -7], 3);
              createMarkers("France")
              zoom = true
            }else{
              map.fitBounds(e.target.getBounds());
              createMarkers(country)
              zoom = true
            }
          }else{
            map.setView([40, -7], 2);
            removeDescription()
            removeMarkers()
            zoom = false
          }
        }

        function onEachFeature(feature, layer) {
            layer.on({
              click: clickMap,
              mouseover: overMap,
              mouseout: outMap
            });
        }

        function onMarkerClick(e){
          let marker_data = e.target.options
          setDescription(marker_data.country, marker_data.city, marker_data.year, marker_data.photos, marker_data.description)
        }

        function createMarkers(country){
          let country_data_selected = PersonalData.travels.filter(e => e.country === country);
          country_data_selected.map((obj, idx) =>
            markers.push(L.marker(obj.coordinates, {country: obj.country, city: obj.city, year: obj.year, photos: obj.photos, description:obj.description}).addTo(map).on('click', onMarkerClick))
          )
        }

        function removeMarkers(){
          {markers.map((m, idx) =>
            map.removeLayer(m)
          )}
          markers = []
        }

        function setDescription(country, city, year, photos, text_description){
          description.style.display = "block"
          description.innerHTML = "<b>" + country + "</b> - " + city + "<br><i>" + year + "</i><br><br>"

          if(photos.length > 1){
            let str_description = ""
            let cpt = 0
            str_description += "\
              <div id='myCarousel' class='carousel slide slide_travels' data-ride='carousel'><ol class='carousel-indicators'>"

            photos.forEach(function(photo){
              if(cpt === 0){
                str_description += "<li data-target='#myCarousel' data-slide-to='0' class='active'></li>";
              }else{
                str_description += "<li data-target='#myCarousel' data-slide-to='" + cpt + "'></li>";
              }
              cpt += 1;
            })

            str_description += "</ol><div class='carousel-inner'>"

            cpt = 0
            photos.forEach(function(photo){
              if(cpt === 0){
                str_description += "<div class='item active'><img src=" + photo + " style='width:100%;'></div>"
              }else{
                str_description += "<div class='item'><img src=" + photo + " style='width:100%;'></div>"
              }
              cpt += 1
            })

            str_description += "\
                </div>\
                <a class='left carousel-control' href='#myCarousel' data-slide='prev'>\
                  <span class='glyphicon glyphicon-chevron-left'></span>\
                  <span class='sr-only'>Previous</span>\
                </a>\
                <a class='right carousel-control' href='#myCarousel' data-slide='next'>\
                  <span class='glyphicon glyphicon-chevron-right'></span>\
                  <span class='sr-only'>Next</span>\
                </a>\
              </div>\
            "
            console.log(str_description)
            description.innerHTML += str_description
          }else{
            description.innerHTML += "<center><img width=300 src='" + photos[0] + "' ></center>"
          }



          description.innerHTML += "<p class='text_description'>" + text_description + "</p>"
        }

        function removeDescription(){
          description.style.display = "none"
        }
    }

    componentWillUnmount() {
        this.map.off('click', this.onMapClick);
        this.map = null;
    }

    onMapClick = (e) => {
        //console.log(e)
    }


    render() {
        return (
          <div id="section-map">
            <div className='map'></div>
            <div id="descriptionId" className="description"></div>
          </div>
        );
    }

}


export default Map
