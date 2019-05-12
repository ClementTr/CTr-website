import MiniBioComponent from './../../MiniBioComponent';
import React from 'react';

function DataScienceComponent (){
 return (

   <div className="container margin-section">

     <div className="col-md-9">
       <div className="title-article">
         <h1 className="title-font">Data Science Category</h1>
       </div>

       <div className="col-md-12 box-margin">
         <a className="box" href="/data-science/etl">
           <div className="media-margin">
             <div className="media-left">
               <img src='img/main/More_01.jpg' className="media-object media-img"/>
             </div>
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
           <div className="media-margin">
             <div className="media-left">
               <img src='img/main/More_02.jpg' className="media-object media-img"/>
             </div>
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


     <MiniBioComponent/>
   </div>
 )



}

export default DataScienceComponent;
