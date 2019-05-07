import React from 'react';
import { Link } from 'react-router-dom'
import CarouselComponent from './CarouselComponent';
import MiniBioComponent from './MiniBioComponent';
import ArticleLinkComponent from './ArticleLinkComponent'
import MoreArticleLinkComponent from './MoreArticleLinkComponent'
import FooterComponent from './FooterComponent'

function HomeComponent (){
 return (
   <div>
    <div id="home-section" className="margin-section">
     <div className="container">
       <div className="row">
        <CarouselComponent></CarouselComponent>
        <MiniBioComponent></MiniBioComponent>
       </div>
      </div>
    </div>
    <ArticleLinkComponent></ArticleLinkComponent>
    <MoreArticleLinkComponent></MoreArticleLinkComponent>
    <FooterComponent/>


  </div>
 )
}

export default HomeComponent;
