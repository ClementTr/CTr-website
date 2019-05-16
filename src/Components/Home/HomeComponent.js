import MoreArticleLinkComponent from './MoreArticleLinkComponent'
import ArticleLinkComponent from './ArticleLinkComponent'
import CarouselComponent from './CarouselComponent';
import MiniBioComponent from './../MiniBioComponent';
import Link from 'react-router-dom'
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
      <ArticleLinkComponent/>
      <MoreArticleLinkComponent/>
    </div>
 )
}

export default HomeComponent;
