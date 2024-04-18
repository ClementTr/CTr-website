import CarouselComponent from './CarouselComponent';
import MiniBioComponent from './../MiniBioComponent';
import React from 'react';

function HomeComponent (){
 return (
    <div>
      <div id="home-section">
       <div className="container">
         <div className="row">
            <div className="col-md-9">
             <CarouselComponent/>
            </div>
            <div className="col-md-3">
              <MiniBioComponent/>
            </div>
         </div>
        </div>
      </div>
    </div>
 )
}

export default HomeComponent;
