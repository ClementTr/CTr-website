import MiniBioComponent from './../../../../MiniBioComponent';
import LoaderComponent from './LoaderComponent';
import DescriptionComponent from './DescriptionComponent';
import MLPreparationComponent from './MLPreparationComponent';
import TrainingComponent from './TrainingComponent';
import HyperOptimizationComponent from './HyperOptimizationComponent';
import ProbThresholdComponent from './ProbThresholdComponent';
import TestComponent from './TestComponent';
import NLPMenuComponent from './NLPMenuComponent';
import Script from 'react-load-script'
import React from 'react';

function NLPArticleComponent (){
 return (
   <div className="container">
     <div className="row">

       <Script url="/js/scrollMenuNLP.js"/>

       <div className="col-md-9">
         <div className="title-article">
           <h1 className="title-font">Natural Language Processing</h1>
           <h3>Legal Document Categorization</h3>
           <span className="mr-2 title-date">April 26, 2019</span>
         </div>
         <div className='article-content'>
          <LoaderComponent/>
          <DescriptionComponent/>
          <MLPreparationComponent/>
          <TrainingComponent/>
          <HyperOptimizationComponent/>
          <ProbThresholdComponent/>
          <TestComponent/>
         </div>
       </div>

       <div className="col-md-3">
         <MiniBioComponent/>
         <NLPMenuComponent/>
       </div>

     </div>
   </div>
 )
}

export default NLPArticleComponent;
