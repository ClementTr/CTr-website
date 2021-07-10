import PersonalData from './PersonalData.json';
import React from 'react';

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

function JourneyComponent (){
  return (
    <div>
     <div className="container">
       <div className="row">
          <div className="col-md-9">
            Visited countries: {all_distinct_countries.length}
          </div>
          <div className="col-md-3">
            Vacations countries: {visited_countries.length}<br></br>
            Studies countries: {studies_countries.length}<br></br>
            Work countries: {work_countries.length}
          </div>
       </div>
      </div>
  </div>
  )
}

export default JourneyComponent;