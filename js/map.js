let map = L.map('leaflet', {
  'center': [70, -7],
  'zoom': 1.5,
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

function zoomToFeature(e) {
  let country = e.target.feature.properties.name
  console.log(country)
  if ((country == prev_country) && (zoomed == 1)){
    map.setView([40, -7], 2);
    zoomed = 0
    undraw_markers()
  }else if(visited_countries.includes(country)){
    if (country != "France"){
        map.fitBounds(e.target.getBounds());
    }else{
        map.setView([40, -7], 3);
    }
    if ((zoomed == 1) && (country == "France")){
        map.setView([40, -7], 3);
    }
    zoomed = 1
    undraw_markers()
    draw_markers(country)
  }else{
    map.setView([40, -7], 2);
    zoomed = 0
    undraw_markers()
  }
  prev_country = country
  description.style.display = "none"
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

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

let legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    let div = L.DomUtil.create('div', 'info legend'),
        grades = ["Visit", "Work", "Studies"],
        colors = ["#084677", "#E0848C", "#669E8F"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (let i = 0; i < grades.length; i++) {
        div.innerHTML += '<i style="background:' + colors[i] + '"></i> ' + grades[i]
        if(i != grades.length-1){
          div.innerHTML += '<br><br>'
        }
    }
    return div;
};

legend.addTo(map);


let description = document.getElementById("description");

function onClick(){
  description.style.display = "block"
  description.innerHTML = "<b>" + this.options.country + "</b> - " + this.options.city + "<br><i>" + this.options.year + "</i><br><br>"
  let pictures = trip_data[this.options.city].photo
  pictures.forEach(function(picture){
    description.innerHTML += "<center><img width=300 src='" + picture + "' ></center>"
  })
  description.innerHTML += "<p class='text_description'>" + trip_data[this.options.city].description[0] + "</p>"
}

let trip_data = {
  'Malta':{
    year: "1998",
    photo: ['img/map/malte.jpg'],
    description: ["Malta, description coming soon"]
  },
  'Tozeur':{
    year: "2001",
    photo: ['img/map/tozeur.jpg'],
    description: ["Tozeur, description coming soon"]
  },
  'Louxor':{
    year: "2002",
    photo: ['img/map/no.png'],
    description: ["Louxor, description coming soon"]
  },
  'Canarias':{
    year: "2003",
    photo: ['img/map/no.png'],
    description: ["Canarias, description coming soon"]
  },
  'Marrakech':{
    year: "2004",
    photo: ['img/map/no.png'],
    description: ["Marrakech, description coming soon"]
  },
  'Guadeloupe':{
    year: "2005",
    photo: ['img/map/no.png'],
    description: ["Guadeloupe, description coming soon"]
  },
  'Djerba':{
    photo: ['img/map/no.png'],
    year: "2005",
    description: ["Djerba, description coming soon"]
  },
  'Ouarzazate':{
    photo: ['img/map/no.png'],
    year: "2006",
    description: ["Ouarzazate, description coming soon"]
  },
  'Calp':{
    photo: ['img/map/no.png'],
    year: "2006",
    description: ["Calp, description coming soon"]
  },
  'Saly':{
    photo: ['img/map/no.png'],
    year: "2006",
    description: ["Saly, description coming soon"]
  },
  'Rodhes':{
    photo: ['img/map/no.png'],
    year: "2007",
    description: ["Rodos, description coming soon"]
  },
  'Martinique':{
    photo: ['img/map/no.png'],
    year: "2008",
    description: ["Martinique, description coming soon"]
  },
  'Sicilia':{
    photo: ['img/map/no.png'],
    year: "2008",
    description: ["Sicilia, description coming soon"]
  },
  'Corfou':{
    photo: ['img/map/no.png'],
    year: "2009",
    description: ["Corfou, description coming soon"]
  },
  'London':{
    photo: ['img/map/londres.jpg'],
    year: "2014",
    description: ["London, description coming soon"]
  },
  'Budapest':{
    photo: ['img/map/budapest.jpg'],
    year: "2015",
    description: ["Budapest, description coming soon"]
  },
  'Barcelone':{
    photo: ['img/map/barcelone.jpg'],
    year: "2015",
    description: ["Barcelona, description coming soon"]
  },
  'Nice':{
    photo: ['img/map/nice.jpg'],
    year: "2016",
    description: ["Nice, description coming soon"]
  },
  'Madrid':{
    photo: ['img/map/madrid.jpg'],
    year: "2016",
    description: ["Madrid, description coming soon"]
  },
  'Roma':{
    photo: ['img/map/rome.jpg'],
    year: "2017",
    description: ["Roma, description coming soon"]
  },
  'Montreux-Lausanne-Genève':{
    photo: ['img/map/montreux.jpeg', 'img/map/geneve.jpg'],
    year: "2018",
    description: ["Montreux-Lausanne-Genève, description coming soon"]
  },
  'Chicago':{
    photo: ['img/map/chicago.jpg'],
    year: "2018",
    description: ["So far this city was the most beautiful surprise of<br> my US journey. Everything you need is there."]
  },
  'Washington':{
    photo: ['img/map/washington.jpg'],
    year: "2018",
    description: ["I took the opportunity to visit the capital of<br> the United States during my ContentSquare adventure."]
  },
  'New York':{
    photo: ['img/map/newyork.jpg'],
    year: "2018-2019",
    description: ["I used to work in the Big Apple<br> as a Data Scientist at ContentSquare."]
  },
  'Paris':{
    photo: ['img/map/paris.jpg'],
    year: "-",
    description: ["I was born (1994) close from Paris and spent my young years there.<br> I received the Master's Degree in Computer Engineering of ESME Sudria<br> after a second internship in Data Science at OCTO Technology (2017).<br> In 2018 I during my Advanced Master in Machine Learning & Data Science<br> I co-founded DataDeer a consulting firm helping startups."]
  }
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
let marker_malte = new L.Marker([35.903471, 14.495387], {country: "Malta", city: 'Malta', year: '1998', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_malte._icon).addClass("hide")

/* TOZEUR 2001 */
let marker_tozeur = new L.Marker([33.918534, 8.122932900000023], {country: "Tunisia", city: 'Tozeur', year: '2001', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_tozeur._icon).addClass("hide")

/* LOUXOR 2002 */
let marker_louxor = new L.Marker([25.687243, 32.639636], {country: "Egypt", city: 'Louxor', year: '2002', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_louxor._icon).addClass("hide")

/* CANARIES 2003 */
let marker_canaries = new L.Marker([28.29156369999999, -16.629130400000008], {country: "Spain", city: 'Canarias', year: '2003', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_canaries._icon).addClass("hide")

/* MARRAKECH 2004 */
let marker_marrakech = new L.Marker([31.6294723, -7.981084499999952], {country: "Morocco", city: 'Marrakech', year: '2004', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_marrakech._icon).addClass("hide")

/* GUADELOUPE 2005 */
let marker_guadeloupe = new L.Marker([16.265, -61.55099999999999], {country: "France", city: 'Guadeloupe', year: '2005', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_guadeloupe._icon).addClass("hide")

/* DJERBA 2005 */
let marker_djerba = new L.Marker([33.8075978, 10.845146699999987], {country: "Tunisia", city: 'Djerba', year: '2005', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_djerba._icon).addClass("hide")

/* OUARZAZATE 2006 */
let marker_ouarzazate = new L.Marker([30.9335436, -6.937015999999971], {country: "Morocco", city: 'Ouarzazate', year: '2006', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_ouarzazate._icon).addClass("hide")

/* CALP 2006
let marker_calp = new L.Marker([38.64364689999999, 0.045687600000064776], {country: "United States", city: 'calp', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);*/

/* SALY 2006 */
let marker_saly = new L.Marker([14.443593, -16.988990400000034], {country: "Senegal", city: 'Saly', year: '2006', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_saly._icon).addClass("hide")

/* RHODES 2007 */
let marker_rhodes = new L.Marker([36.4340533, 28.2176379], {country: "Greece", city: 'Rhodes', year: '2007', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_rhodes._icon).addClass("hide")

/* MARTINIQUE 2008 */
let marker_martinique = new L.Marker([14.641528, -61.024174000000016], {country: "France", city: 'Martinique', year: '2008', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_martinique._icon).addClass("hide")

/* SICILE 2008 */
let marker_sicile = new L.Marker([37.5999938, 14.015355699999986], {country: "Italy", city: 'Sicile', year: '2008', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_sicile._icon).addClass("hide")

/* CORFOU 2009 */
let marker_corfou = new L.Marker([39.624262, 19.921678], {country: "Greece", city: 'Corfou', year: '2009', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_corfou._icon).addClass("hide")

/* LONDRES 2014 */
let marker_london = new L.Marker([51.554888, -0.108438], {country: "United Kingdom", city: 'London', year: '2014', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_london._icon).addClass("hide")

/* BUDAPEST 2015 */
let marker_budapest = new L.Marker([47.497912, 19.040235], {country: "Hungary", city: 'Budapest', year: '2015', icon: greenIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_budapest._icon).addClass("hide")

/* BARCELONE 2015 */
let marker_barcelone = new L.Marker([41.385064, 2.173403], {country: "Spain", city: 'Barcelone', year: '2015', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_barcelone._icon).addClass("hide")

/* MADRID 2016 */
let marker_madrid = new L.Marker([40.413980, -3.682179], {country: "Spain", city: 'Madrid', year: '2016', icon: blueIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_madrid._icon).addClass("hide")

/* NICE 2016 */
let marker_nice = new L.Marker([43.686011, 7.295201], {country: "France", city: 'Nice', year: '2016', icon: redIcon})
   .addTo(map)
   .on('mousedown', onClick);
   $(marker_nice._icon).addClass("hide")

/* ROME 2017 */
let marker_rome = new L.Marker([41.902783, 12.496366], {country: "Italy", city: 'Roma', year: '2017', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_rome._icon).addClass("hide")

/* SUISSE 2018 */
let marker_suisse = new L.Marker([46.4312213, 6.910679899999991], {country: "Switzerland", city: 'Montreux-Lausanne-Genève', year: '2018', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_suisse._icon).addClass("hide")


let marker_chicago = new L.Marker([41.8780841, -87.60315259999999], {country: "United States", city: 'Chicago', year: '2018', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_chicago._icon).addClass("hide")

/* USA Washingotn 2018 */
let marker_washington = new L.Marker([38.8976763, -77.03652979999998], {country: "United States", city: 'Washington', year: '2018', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_washington._icon).addClass("hide")

/* USA New York 2018 */
let marker_newyork = new L.Marker([40.750568, -73.99351899999999], {country: "United States", city: 'New York', year: '2018-', icon: redIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_newyork._icon).addClass("hide")

/* PARIS */
let marker_paris = new L.Marker([48.826294, 2.346419], {country: "France", city: 'Paris', year: '-', icon: greenIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_paris._icon).addClass("hide")

let prev_country
let zoomed = 0
let markers_array = [
                     marker_malte, marker_tozeur, marker_louxor, marker_canaries, marker_marrakech, marker_guadeloupe,
                     marker_djerba, marker_ouarzazate, marker_saly, marker_rhodes, marker_martinique, marker_sicile,
                     marker_corfou, marker_london, marker_budapest, marker_barcelone, marker_madrid, marker_nice, marker_rome,
                     marker_suisse, marker_chicago, marker_washington, marker_newyork,
                     marker_paris
                    ]

let work_countries = ["France", "United States"]
let study_countries = ["France", "Hungary"]
let visited_countries = []

markers_array.forEach(function(marker){
  if(visited_countries.includes(marker.options.country) == false){
      visited_countries.push(marker.options.country)
  }
});

let geojson;
geojson = L.geoJson(countries_data, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
