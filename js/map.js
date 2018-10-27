let map = L.map('leaflet', {
  'center': [40, -7],
  'zoom': 2,
  'layers': [
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      maxZoom: 6,
      minZoom: 2
    })
  ]
});
L.geoJson(countries_data, { weight: 1 }).addTo(map);

let southWest = L.latLng(-60, -180),
northEast = L.latLng(89, 180);
let bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

function getColor(name) {
  if(visited_countries.includes(name)){
    return '#084677'
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

function highlightFeature(e) {
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

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

let zoom_to_f = 0
function zoomToFeature(e) {
  let country = e.target.feature.properties.name
  console.log(country)
  if( (visited_countries.includes(country)) && (zoom_to_f == 0) ){
    map.fitBounds(e.target.getBounds());
    zoom_to_f = 1
    draw_markers(country)
  }else{
    map.setView([40, -7], 2);
    zoom_to_f = 0
    undraw_markers()
  }
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
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
        : 'Hover over a state');
};

info.addTo(map);

function onClick(){
  return 0
}

let LeafIcon = L.Icon.extend({
    options: {
        iconSize: [30, 60]
    }
});
let blueIcon = new LeafIcon({iconUrl: 'img/map/icon_blue.png'});
let greenIcon = new LeafIcon({iconUrl: 'img/map/icon_green.png'});
let redIcon = new LeafIcon({iconUrl: 'img/map/icon_red.png'});

/* MALTE 1998 */
let marker_malte = new L.Marker([35.903471, 14.495387], {country: "Malta", myCustomId: 'malte', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_malte._icon).addClass("hide")

/* TOZEUR 2001 */
let marker_tozeur = new L.Marker([33.918534, 8.122932900000023], {country: "Tunisia", myCustomId: 'tozeur', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_tozeur._icon).addClass("hide")

/* LOUXOR 2002 */
let marker_louxor = new L.Marker([25.687243, 32.639636], {country: "Egypt", myCustomId: 'louxor', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_louxor._icon).addClass("hide")

/* CANARIES 2003 */
let marker_canaries = new L.Marker([28.29156369999999, -16.629130400000008], {country: "Spain", myCustomId: 'canaries', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_canaries._icon).addClass("hide")

/* MARRAKECH 2004 */
let marker_marrakech = new L.Marker([31.6294723, -7.981084499999952], {country: "Morocco", myCustomId: 'marrakech', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_marrakech._icon).addClass("hide")

/* GUADELOUPE 2005 */
let marker_guadeloupe = new L.Marker([16.265, -61.55099999999999], {country: "France", myCustomId: 'guadeloupe', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_guadeloupe._icon).addClass("hide")

/* DJERBA 2005 */
let marker_djerba = new L.Marker([33.8075978, 10.845146699999987], {country: "Tunisia", myCustomId: 'djerba', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_djerba._icon).addClass("hide")

/* OUARZAZATE 2006 */
let marker_ouarzazate = new L.Marker([30.9335436, -6.937015999999971], {country: "Morocco", myCustomId: 'ouarzazate', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_ouarzazate._icon).addClass("hide")

/* CALP 2006
let marker_calp = new L.Marker([38.64364689999999, 0.045687600000064776], {country: "United States", myCustomId: 'calp', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);*/

/* SALY 2006 */
let marker_saly = new L.Marker([14.443593, -16.988990400000034], {country: "Senegal", myCustomId: 'saly', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_saly._icon).addClass("hide")

/* RHODES 2007 */
let marker_rhodes = new L.Marker([36.4340533, 28.2176379], {country: "Greece", myCustomId: 'rhodes', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_rhodes._icon).addClass("hide")

/* MARTINIQUE 2008 */
let marker_martinique = new L.Marker([14.641528, -61.024174000000016], {country: "France", myCustomId: 'martinique', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_martinique._icon).addClass("hide")

/* SICILE 2008 */
let marker_sicile = new L.Marker([37.5999938, 14.015355699999986], {country: "Italy", myCustomId: 'sicile', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_sicile._icon).addClass("hide")

/* CORFOU 2009 */
let marker_corfou = new L.Marker([39.624262, 19.921678], {country: "Greece", myCustomId: 'corfou', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_corfou._icon).addClass("hide")

/* LONDRES 2014 */
let marker_london = new L.Marker([51.554888, -0.108438], {country: "United Kingdom", myCustomId: 'londres', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_london._icon).addClass("hide")

/* BUDAPEST 2015 */
let marker_budapest = new L.Marker([47.497912, 19.040235], {country: "Hungary", myCustomId: 'budapest', icon: greenIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_budapest._icon).addClass("hide")

/* BARCELONE 2015 */
let marker_barcelone = new L.Marker([41.385064, 2.173403], {country: "Spain", myCustomId: 'barcelone', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_barcelone._icon).addClass("hide")

/* MADRID 2016 */
let marker_madrid = new L.Marker([40.413980, -3.682179], {country: "Spain", myCustomId: 'madrid', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_madrid._icon).addClass("hide")

/* NICE 2016 */
let marker_nice = new L.Marker([43.686011, 7.295201], {country: "France", myCustomId: 'nice', icon: greenIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_nice._icon).addClass("hide")

/* ROME 2017 */
let marker_rome = new L.Marker([41.902783, 12.496366], {country: "Italy", myCustomId: 'rome', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_rome._icon).addClass("hide")

/* SUISSE 2018 */
let marker_suisse = new L.Marker([46.4312213, 6.910679899999991], {country: "Switzerland", myCustomId: 'suisse', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_suisse._icon).addClass("hide")


let marker_chicago = new L.Marker([41.8780841, -87.60315259999999], {country: "United States", myCustomId: 'chicago', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_chicago._icon).addClass("hide")

/* USA Washingotn 2018 */
let marker_washington = new L.Marker([38.8976763, -77.03652979999998], {country: "United States", myCustomId: 'washington', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_washington._icon).addClass("hide")

/* USA New York 2018 */
let marker_newyork = new L.Marker([40.750568, -73.99351899999999], {country: "United States", myCustomId: 'newyork', icon: greenIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_newyork._icon).addClass("hide")

/* PARIS */
let marker_paris = new L.Marker([48.826294, 2.346419], {country: "France", myCustomId: 'paris', icon: redIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_paris._icon).addClass("hide")


let markers_array = [
                     marker_malte, marker_tozeur, marker_louxor, marker_canaries, marker_marrakech, marker_guadeloupe,
                     marker_djerba, marker_ouarzazate, marker_saly, marker_rhodes, marker_martinique, marker_sicile,
                     marker_corfou, marker_london, marker_budapest, marker_barcelone, marker_madrid, marker_nice, marker_rome,
                     marker_suisse, marker_chicago, marker_washington, marker_newyork,
                     marker_paris
                    ]

let geojson;
let visited_countries = []
markers_array.forEach(function(marker){
  if(visited_countries.includes(marker.options.country) == false){
      visited_countries.push(marker.options.country)
  }
});
geojson =  L.geoJson(countries_data, {style: style}).addTo(map);
geojson = L.geoJson(countries_data, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

function draw_markers(country){
  markers_array.forEach(function(marker){
    if(marker.options.country == country){
        $(marker._icon).removeClass("hide")
    }
  });
}


function undraw_markers(){
  markers_array.forEach(function(marker){
      $(marker._icon).addClass("hide")
  });
}
