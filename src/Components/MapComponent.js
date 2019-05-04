import { Map as LeafletMap, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import React from 'react';
import L from 'leaflet';
import style from './MapFunctions'

let southWest = L.latLng(-60, -180),
northEast = L.latLng(89, 180);
let bounds = L.latLngBounds(southWest, northEast);
var map_data = require('./MapData.js').default;

const mapCenter = [30, -7];
const zoomLevel = 1.5;
let zoom = false


class Map extends React.Component {

  onEachFeature(component, feature, layer) {
        layer.on({
            mouseover: function(e) {
              //console.log(e.target.feature.id)
            },
            mouseout: function(e) {
              //
            },
            click: function(e) {
              // console.log(visited_countries)
              let country = e.target.feature.properties.name
              if(zoom == false){
                component.refs.map.leafletElement.fitBounds(e.target.getBounds())
                zoom = true
              }else{
                component.refs.map.leafletElement.setView(mapCenter, zoomLevel);
                zoom = false
              }
              if (country == "France"){
                  component.refs.map.leafletElement.setView([40, -7], 3);
                  zoom = true
              }
            },
            clickOutside:function() { console.log('click outside');}
        });

  }

  render() {
    return (

      <LeafletMap
        ref='map'
        center={mapCenter}
        zoom={zoomLevel}
        maxBounds = {bounds}
        maxZoom={6}
        minZoom={2}
        attribution={'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'}
        attributionControl={true}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png'
        />
        <GeoJSON
          ref="geojson"
          data={map_data}
          style={style}
          onEachFeature={this.onEachFeature.bind(null, this)}
        />

        <Marker position={[50, 10]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map
