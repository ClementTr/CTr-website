const work_countries = ["France", "United States"]
const study_countries = ["France", "Hungary"]
const visited_countries = []

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

export default style;
