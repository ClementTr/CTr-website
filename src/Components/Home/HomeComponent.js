import MoreArticleLinkComponent from './MoreArticleLinkComponent'
import ArticleLinkComponent from './ArticleLinkComponent'
import CarouselComponent from './CarouselComponent';
import MiniBioComponent from './../MiniBioComponent';
import Link from 'react-router-dom'
import React from 'react';

function HomeComponent (){
 return (
    <div>
      <div id="home-section" className="margin-section">
       <div className="container">
         <div className="row">
          <CarouselComponent/>
          <MiniBioComponent/>
         </div>
        </div>
      </div>
      <ArticleLinkComponent/>
      <MoreArticleLinkComponent/>
    </div>
 )
}

export default HomeComponent;
