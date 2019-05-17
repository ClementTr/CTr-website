import TransformManipulationComponent from './TransformManipulationComponent'
import TransformFeaturingComponent from './TransformFeaturingComponent';
import MiniBioComponent from './../../../../MiniBioComponent';
import AnalysisVizComponent from './AnalysisVizComponent'
import ScraperComponent from './ScraperComponent';
import ETLMenuComponent from './ETLMenuComponent';
import Script from 'react-load-script'
import React from 'react';

function ETLArticleComponent (){
 return (
   <div className="container margin-section">
    <div className="row">

    <Script url="/js/scrollMenuETL.js"/>

     <div className="col-sm-9">
       <div className="title-article">
         <h1 className="title-font">Extract, Transform & Load</h1>
         <h3>Pandas Basics with Arsenal Football Club</h3>
         <span className="mr-2 title-date">March 15, 2018 </span>
       </div>
       <div className='article-content'>
         <ScraperComponent/>
         <TransformFeaturingComponent/>
         <TransformManipulationComponent/>
         <AnalysisVizComponent/>
       </div>
     </div>

     <div className="col-sd-3">
       <MiniBioComponent/>
       <ETLMenuComponent/>
     </div>

     </div>
   </div>
 )
}

export default ETLArticleComponent;
