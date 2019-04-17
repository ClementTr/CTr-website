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

// let legend2 = L.control({position: 'bottomright'});
// legend2.onAdd = function (map) {
//     let div = L.DomUtil.create('div', 'info legend'),
//         grades = ["Visit", "Work", "Studies"],
//         colors = ["#084677", "#E0848C", "#669E8F"];
//
//     // loop through our density intervals and generate a label with a colored square for each interval
//     for (let i = 0; i < grades.length; i++) {
//         div.innerHTML += '<i style="background:' + colors[i] + '"></i> ' + grades[i]
//         if(i != grades.length-1){
//           div.innerHTML += '<br><br>'
//         }
//     }
//     return div;
// };
//
// legend2.addTo(map);


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
    description: ["You can see me at 4 years old with my most <br>beautiful pink cap and all my family in Malta."]
  },
  'Tozeur':{
    year: "2001",
    photo: ['img/map/tozeur.jpg'],
    description: ["Aged of 7 I'm sure you can imagine <br>how happy I was to discover the Sahara Desert<br> and its iconic sets from the Star Wars movies"]
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
  'Sicile':{
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
    description: ["If you already met me, you know how much I love football<br> and especially Arsenal, THE ONLY North London football team.<br>That picture was taken just before my first game in the Emirates Stadium."]
  },
  'Budapest':{
    photo: ['img/map/budapest.jpg'],
    year: "2015",
    description: ["My first true adventure abroad was in Budapest and it is just<br> about good memories. Over there I completed my bachelor in<br>'Automation & Applied Informatics and Advanced Data Analysis' "]
  },
  'Barcelone':{
    photo: ['img/map/barcelone.jpg'],
    year: "2015",
    description: ["Barcelona, description coming soon"]
  },
  'Nice':{
    photo: ['img/map/nice.jpg'],
    year: "2016",
    description: ["It's hard to believe seeing this picture<br> but I came to Nice (2016) as a Data Scientist intern !<br>Prozone (now Stats) was my first internship in Data<br> and it helps me to reach every steps which came after."]
  },
  'Madrid':{
    photo: ['img/map/madrid.jpg', 'img/map/madrid1.jpg'],
    year: "2016",
    description: ["I came to Madrid to visit a friend who used to live there during one semester.<br>As a dedicated football fan I was delighted to see in this specific place<br>the Champions League final between Atletico Madrid and Real Madrid.<br>Guess who won?"]
  },
  'Roma':{
    photo: ['img/map/rome.jpg'],
    year: "2017",
    description: ["Roma is definitively the most beautiful city I have seen in Europe.<br>(If I don't take Paris into account of course 🤭)"]
  },
  'Montreux-Lausanne-Genève':{
    photo: ['img/map/montreux.jpeg', 'img/map/geneve.jpg'],
    year: "2018",
    description: ["Montreux-Lausanne-Genève<br>Lac Leman mini road trip"]
  },
  'Chicago':{
    photo: ['img/map/chicago.jpg'],
    year: "2018",
    description: ["It was so far the was most beautiful surprise of<br> my U.S. journey. Everything you need is there."]
  },
  'Washington':{
    photo: ['img/map/washington.jpg', 'img/map/washington2.png'],
    year: "2018",
    description: ["I took the opportunity to visit the<br> U.S. capital during my ContentSquare adventure.<br>Every movies I used to watch in my childhood was there.<br>The first one I have in mind is Forsest Gump."]
  },
  'Boston':{
    photo: ['img/map/boston.jpg'],
    year: "2018",
    description: ["Boston was like a quick come back in Europe.<br>Beautiful city with of the course best<br>universities of the world !<br>Harvard first and below, MIT."]
  },
  'Philadelphia':{
    photo: ['img/map/philadelphia1.jpg','img/map/philadelphia2.jpg'],
    year: "2018",
    description: ["From the Old City to the Museum of Art<br>I finally met you Phily, home of<br>my childhood hero (and cheesesteak)."]
  },
  'Orlando':{
    photo: ['img/map/orlando.jpg'],
    year: "2019",
    description: ["Florida Road Trip - Télécom Degree Celebraton - Stop 1"]
  },
  'Miami':{
    photo: ['img/map/miami.jpg'],
    year: "2019",
    description: ["Florida Road Trip - Télécom Degree Celebraton - Stop 2"]
  },
  'New York':{
    photo: ['img/map/newyork.jpg'],
    year: "2018-2019",
    description: ["I use to work in the Big Apple<br> as a Data Scientist for ContentSquare.<br>For me, a couple of minutes was enough to fall<br>in love with this place."]
  },
  'Charleston':{
    photo: ['img/map/charleston.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 1"]
  },
  'Savannah':{
    photo: ['img/map/savannah.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 2"]
  },
  'Atlanta':{
    photo: ['img/map/atlanta.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 3"]
  },
  'Nashville':{
    photo: ['img/map/nashville.jpg', 'img/map/nashville2.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 4"]
  },
  'New Orleans':{
    photo: ['img/map/neworleans.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 5"]
  },
  'Houston':{
    photo: ['img/map/houston.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 6"]
  },
  'San Antonio':{
    photo: ['img/map/sanantonio.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 7"]
  },
  'Austin':{
    photo: ['img/map/austin.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 8"]
  },
  'Dallas':{
    photo: ['img/map/dallas.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 9"]
  },
  'Tombstone':{
    photo: ['img/map/tombstone.jpg', 'img/map/tombstone2.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 10"]
  },
  'Phoenix':{
    photo: ['img/map/phoenix.jpg'],
    year: "2019",
    description: ["USA Road Trip - Stop 11 (Last One)"]
  },
  'Paris':{
    photo: ['img/map/paris.jpg'],
    year: "-",
    description: ["I was born (1994) in a small town close from Paris where I spent my young years.<br>I received the Master's Degree in Computer Engineering of ESME Sudria<br> after a second internship in Data Science at OCTO Technology (2017).<br> In 2018, during my Advanced Master in Machine Learning & Big Data,<br>I co-founded DataDeer a consulting firm helping startups."]
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

/* USA Boston 2018 */
let marker_boston = new L.Marker([42.3600825, -71.05888010000001], {country: "United States", city: 'Boston', year: '2018', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_boston._icon).addClass("hide")

/* USA Philadelphia 2018 */
let marker_philadelphia = new L.Marker([39.9525839, -75.16522150000003], {country: "United States", city: 'Philadelphia', year: '2018', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_philadelphia._icon).addClass("hide")

/* USA Orlando 2019 */
let marker_orlando = new L.Marker([28.5421097, -81.3790388], {country: "United States", city: 'Orlando', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_orlando._icon).addClass("hide")

/* USA Miami 2019 */
let marker_miami = new L.Marker([25.7742658, -80.1936589], {country: "United States", city: 'Miami', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_miami._icon).addClass("hide")

/* USA New York 2018 */
let marker_newyork = new L.Marker([40.750568, -73.99351899999999], {country: "United States", city: 'New York', year: '2018-', icon: redIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_newyork._icon).addClass("hide")

/* USA Charleston 2019 */
let marker_charleston = new L.Marker([32.7876012, -79.9402728], {country: "United States", city: 'Charleston', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_charleston._icon).addClass("hide")

/* USA Savannah 2019 */
let marker_savannah = new L.Marker([32.0809263, -81.0911768], {country: "United States", city: 'Savannah', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_savannah._icon).addClass("hide")

/* USA Atlanta 2019 */
let marker_atlanta = new L.Marker([33.7490987, -84.3901849], {country: "United States", city: 'Atlanta', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_atlanta._icon).addClass("hide")

/* USA Nashville 2019 */
let marker_nashville = new L.Marker([36.1622296, -86.7743531], {country: "United States", city: 'Nashville', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_nashville._icon).addClass("hide")

/* USA New Orleans 2019 */
let marker_neworleans = new L.Marker([29.9499, -90.07010000000002], {country: "United States", city: 'New Orleans', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_neworleans._icon).addClass("hide")

/* USA Houston 2019 */
let marker_houston = new L.Marker([29.7589382, -95.3676974], {country: "United States", city: 'Houston', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_houston._icon).addClass("hide")

/* USA San Antonio 2019 */
let marker_sanantonio = new L.Marker([29.4246, -98.49509999999998], {country: "United States", city: 'San Antonio', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_sanantonio._icon).addClass("hide")

/* USA Austin 2019 */
let marker_austin = new L.Marker([30.2711286, -97.7436995], {country: "United States", city: 'Austin', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_austin._icon).addClass("hide")

/* USA Dallas 2019 */
let marker_dallas = new L.Marker([32.7762719, -96.7968559], {country: "United States", city: 'Dallas', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_dallas._icon).addClass("hide")

/* USA Tombstone 2019 */
let marker_tombstone = new L.Marker([31.7128683, -110.0675764], {country: "United States", city: 'Tombstone', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_tombstone._icon).addClass("hide")

/* USA Phoenix 2019 */
let marker_phoenix = new L.Marker([33.4485866, -112.0773456], {country: "United States", city: 'Phoenix', year: '2019', icon: blueIcon})
  .addTo(map)
  .on('mousedown', onClick);
  $(marker_phoenix._icon).addClass("hide")

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
                     marker_suisse, marker_chicago, marker_washington, marker_boston, marker_philadelphia, marker_orlando,
                     marker_miami, marker_newyork,
                     marker_charleston, marker_savannah, marker_atlanta, marker_nashville, marker_neworleans, marker_houston,
                     marker_sanantonio, marker_austin, marker_dallas, marker_tombstone, marker_phoenix,
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
