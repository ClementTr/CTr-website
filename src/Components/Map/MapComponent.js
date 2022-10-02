import PersonalData from './PersonalData.json';
import Script from 'react-load-script'
import ReactDOM from 'react-dom';
import React from 'react';
import L from 'leaflet';

let map_data = require('./MapData.js').default;
let markers = []
let zoom = false
let last_clicked_country

function distinct(value, index, self) {
    return self.indexOf(value) === index;
}

function purposeFilter(e, purpose) {
  let arr_countries = []
  e.travels.forEach(function(travel){
    travel.journey.forEach(function(journey){
      if(journey.purpose === purpose){
        arr_countries.push({
          'country': travel.country,
          'year': journey.year,
          'photos': journey.photos
        })
      }
    })
  })
  return arr_countries
}

function getPurposeCountries(data, purpose){
  let purpose_countries;
  if(purpose){
    purpose_countries = purposeFilter(data, purpose)
  }else{
    purpose_countries = data.travels;
  }
  purpose_countries = purpose_countries.map(obj => {
    return obj.country;
  });
  purpose_countries = purpose_countries.filter(distinct)
  console.log(purpose)
  console.log(purpose_countries)
  return purpose_countries
}

const all_distinct_countries = getPurposeCountries(PersonalData)
const visited_countries = getPurposeCountries(PersonalData, 'visit')
const studies_countries = getPurposeCountries(PersonalData, 'studies')
const work_countries = getPurposeCountries(PersonalData, 'work')

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
          'center': [0, -1],
          'zoom': 1,
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

        let legend = L.control({position: 'bottomleft'});
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
          if(all_distinct_countries.includes(country)){
            if(country === last_clicked_country && zoom === true){
              map.setView([40, -7], 2);
              removeDescription()
              removeMarkers()
              zoom = false
            }else{
              map.fitBounds(e.target.getBounds());
              removeDescription()
              removeMarkers()
              createMarkers(country)

              description.style.display = 'none'
              last_clicked_country = country
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
          setDescription(marker_data.country, marker_data.city, marker_data.description, marker_data.journey)
        }

        function createMarkers(country){
          let country_data_selected = PersonalData.travels.filter(e => e.country === country);
          console.log(country_data_selected)
          country_data_selected.map((obj, idx) =>
            markers.push(L.marker(obj.coordinates, {country: obj.country, city: obj.city, description: obj.description, journey: obj.journey}).addTo(map).on('click', onMarkerClick))
          )
        }

        function removeMarkers(){
          {markers.map((m, idx) =>
            map.removeLayer(m)
          )}
          markers = []
        }

        function setDescription(country, city, text_description, journey){
          console.log(country, city, text_description, journey)
          description.style.display = "block"
          description.innerHTML = "<b>" + country + "</b> - "
          description.innerHTML += city
          description.innerHTML += "<br/>"
          journey.forEach(function(journey, i){
            if(i==0){
              description.innerHTML += journey.year
            }else{
              description.innerHTML += " & " + journey.year
            }
          })

          let carousel_description = []
          journey.forEach(function(journey){
            journey.photos.forEach(function(photo){
              carousel_description.push({
                year: journey.year,
                photo: photo
              })
            })
          })


          if(carousel_description.length > 1){
            let str_description = ""
            str_description += "\
            <div id='carouselExampleControls' class='carousel slide' data-ride='carousel'>\
            <ol class='carousel-indicators'>\
              "

            for(cpt=0; cpt<carousel_description.length; cpt++){
              if(cpt === 0){
                str_description += "\
                <li data-target='#carouselExampleControls' data-slide-to='0' class='active'></li>\
                ";
              }else{
                str_description += "\
                <li data-target='#carouselExampleControls' data-slide-to='" + cpt + "'></li>\
                ";
              }
            }

            str_description += "</ol>\
            <div class='carousel-inner'>"

            let cpt = 0
            carousel_description.forEach(function(description){
                if(cpt === 0){
                  str_description += "\
                  <div class='carousel-item active'>\
                    <img src='https://s3.us-east-1.amazonaws.com/clementtailleur.com/img/map/" + description.year + "/" + description.photo + "' style='width: 100%' alt='Slide 0'>\
                    <div class='carousel-caption d-none d-md-block'>\
                      <h5>" + description.year + "</h5>\
                      <p>...</p>\
                  </div>\
                  </div>\
                  ";
                }else{
                  str_description += "\
                  <div class='carousel-item'>\
                    <img src='https://s3.us-east-1.amazonaws.com/clementtailleur.com/img/map/" + description.year + "/" +  description.photo + "' style='width: 100%' alt='Slide " + cpt + "'>\
                    <div class='carousel-caption d-none d-md-block'>\
                      <h5>" + description.year + "</h5>\
                      <p>...</p>\
                    </div>\
                  </div>\
                  ";
                }
                cpt += 1;
              })

            str_description += "\
                                </div>\
                                "


            str_description += "\
            </div>\
            <a class='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev'>\
              <span class='carousel-control-prev-icon' aria-hidden='true'></span>\
              <span class='sr-only'>Previous</span>\
            </a>\
            <a class='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'>\
              <span class='carousel-control-next-icon' aria-hidden='true'></span>\
              <span class='sr-only'>Next</span>\
            </a>\
          </div>\
            "

            description.innerHTML += str_description
          }else{
            console.log(carousel_description)
            description.innerHTML += "\
            <center>\
              <img style='width: 100%' src='https://s3.us-east-1.amazonaws.com/clementtailleur.com/img/map/" + carousel_description[0].year + "/" + carousel_description[0].photo + "' >\
            </center>\
            "
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
            <div id="descriptionId" className="description"> </div>
          </div>
        );
    }

}


export default Map
