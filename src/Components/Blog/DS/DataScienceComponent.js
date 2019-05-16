import MiniBioComponent from './../../MiniBioComponent';
import React from 'react';

function DataScienceComponent (){
 return (

   <div className="container">
    <div className="row">

     <div className="col-md-9">

       <div className="title-article">
         <h1 className="title-font">Data Science Category</h1>
       </div>

       <div className="col-md-12 box-margin">
        <a className="box" href="/data-science/etl">
           <div className="media">
             <img className="align-self-center mr-3 media-object media-img" src='img/main/More_01.jpg' alt="Generic placeholder image"/>
             <div className="media-body">
               <h4>Extract, Transform & Load - Pandas Basics</h4>
               <span className="category">ETL</span>
               <span className="mr-2">March 15, 2018</span>
               <p>
                 Python - Pandas, Numpy & Matplotlib on Arsenal F.C. scraped data.
               </p>
             </div>
           </div>
         </a>
       </div>

       <div className="col-md-12 box-margin">
        <a className="box" href="/data-science/nlp">
           <div className="media">
             <img className="align-self-center mr-3 media-object media-img" src='img/main/More_02.jpg' alt="Generic placeholder image"/>
             <div className="media-body">
               <h4>Natural Language Processing - Legal Document Categorization</h4>
               <span className="category">NLP</span>
               <span className="mr-2">April 26, 2019</span>
               <p>
                 Work in progress...
               </p>
             </div>
           </div>
         </a>
       </div>
      
     </div>

     <div className="col-md-3">
       <MiniBioComponent/>
     </div>

    </div>
   </div>
 )



}

export default DataScienceComponent;
