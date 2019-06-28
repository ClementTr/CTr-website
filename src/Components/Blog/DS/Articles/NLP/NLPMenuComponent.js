import React from 'react';

function ETLMenuComponent (){
 return (
     <div id='nlp-menu' className="margintop-navbar article-menu">
       <div className="col-sm-12" id='nlp-menu-center'>
         <nav id="nlpScrollspy">
           <ul className="nav nav-pills nav-stacked">
            <li><a href="#nlp-loader">Loader</a></li>
            <li><a href="#nlp-description">Description</a></li>
            <li><a href="#nlp-ml-preparation">Machine Learning Preparation</a></li>
            <li><a href="#nlp-training">Training</a></li>
            <li><a href="#nlp-hyper-optimization">HyperParameters Optimization</a></li>
            <li><a href="#nlp-probabilies-threshold">Class Probabilities Threshold</a></li>
            <li><a href="#nlp-test">Test Prediction</a></li>
           </ul>
         </nav>
       </div>
     </div>
 )
}

export default ETLMenuComponent;
