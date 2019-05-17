import MiniBioComponent from './../../../../MiniBioComponent';
import React from 'react';

function NLPArticleComponent (){
 return (
   <div className="container">
     <div className="row">

       <div className="col-md-9">
         <div className="title-article">
           <h1 className="title-font">Natural Language Processing</h1>
           <h3>Legal Document Categorization</h3>
           <span className="mr-2 title-date">April 26, 2019</span>
         </div>
         <p>
           Work in progress...
         </p>
       </div>

       <div className="col-md-3">
         <MiniBioComponent/>
       </div>

     </div>
   </div>
 )
}

export default NLPArticleComponent;