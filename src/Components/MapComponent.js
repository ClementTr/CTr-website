import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import myData from './data.json';

let map_data = require('./MapData.js').default;
let markers = []
let zoom = false

const work_countries = ["France", "United States"]
const study_countries = ["France", "Hungary"]

const visited_countries = []
myData.travels.forEach(function(obj){
  if(visited_countries.includes(obj.country) == false){
    visited_countries.push(obj.country)
  }
})

function getColor(name) {
  if(work_countries.includes(name)){
    return "#E0848C"
  }else if(study_countries.includes(name)){
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
        var map = this.map = L.map(ReactDOM.findDOMNode(this), {
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

        let description = document.getElementById("descriptionId");

        let geojson;
        geojson = L.geoJson(map_data, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);

        function setDescription(country, city, year, photos, text_description){
          description.style.display = "block"
          description.innerHTML = "<b>" + country + "</b> - " + city + "<br><i>" + year + "</i><br><br>"
          photos.forEach(function(photo){
            description.innerHTML += "<center><img width=300 src='" + photo + "' ></center>"
          })
          description.innerHTML += "<p class='text_description'>" + text_description + "</p>"
        }

        function removeDescription(){
          description.style.display = "none"
        }

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
          console.log(country)
          if(zoom == false){
            if(country === "France"){
              map.setView([40, -7], 3);
              create_markers("France")
              zoom = true
            }else{
              map.fitBounds(e.target.getBounds());
              create_markers(country)
              zoom = true
            }
          }else{
            map.setView([40, -7], 2);
            removeDescription()
            remove_markers()
            zoom = false
          }
        }

        function remove_markers(){
          {markers.map((m, idx) =>
            map.removeLayer(m)
          )}
          markers = []
        }

        function onEachFeature(feature, layer) {
            layer.on({
              click: clickMap,
              mouseover: overMap,
              mouseout: outMap
            });
        }

        function onMarkerClick(e){
          console.log(e.target.options)
          let marker_data = e.target.options
          console.log(marker_data)
          setDescription(marker_data.country, marker_data.city, marker_data.year, marker_data.photos, marker_data.description)
        }

        function create_markers(country){
          let country_data_selected = myData.travels.filter(e => e.country === country);
          console.log("hihi", country_data_selected)

          country_data_selected.map((obj, idx) =>
            markers.push(L.marker(obj.coordinates, {country: obj.country, city: obj.city, year: obj.year, photos: obj.photos, description:obj.description}).addTo(map).on('click', onMarkerClick))
          )
        }

        let info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            this._div.innerHTML = '<h4>Country</h4>' +  (props ?
                '<b>' + props.name + '</b>'
                : 'Hover over a country');
        };

        info.addTo(map);

        map.on('click', this.onMapClick);
        map.fitWorld();
    }

    componentWillUnmount() {
        this.map.off('click', this.onMapClick);
        this.map = null;
    }

    onMapClick = (e) => {
        //console.log(e)
    }

    // onMarkerClick = (e) => {
    //   console.log(e.target.options)
    // }

    render() {
        return (
          <div id="full-map">
            <div className='map'></div>
            <div id="descriptionId" className="description"></div>
          </div>
        );
    }

}


export default Map
