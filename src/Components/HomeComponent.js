import React from 'react';
import { Link } from 'react-router-dom'
import CarouselComponent from './CarouselComponent';
import MiniBioComponent from './MiniBioComponent';
import ArticleLinkComponent from './ArticleLinkComponent'
import MoreArticleLinkComponent from './MoreArticleLinkComponent'

function HomeComponent (){
 return (
   <div>
    <section id="home-section" className="margin-section">
     <div className="container">
       <div className="row">
        <CarouselComponent></CarouselComponent>
        <MiniBioComponent></MiniBioComponent>
       </div>
      </div>
    </section>
    <ArticleLinkComponent></ArticleLinkComponent>
    <MoreArticleLinkComponent></MoreArticleLinkComponent>


  </div>
 )
}

export default HomeComponent;
