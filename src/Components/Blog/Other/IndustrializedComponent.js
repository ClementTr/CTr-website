import MiniBioComponent from './../../MiniBioComponent';
import React from 'react';

function IndustrializedComponent (){
 return (
   <div className="container margin-section">

     <div className="col-md-9">
       <div className="title-article">
         <h1 className="title-font">Industralized Projects Category</h1>
       </div>

       <div className="col-md-12 box-margin">
         <a className="box" href="/data-science/etl">
           <div className="media-margin">
             <div className="media-left">
               <img src='img/main/Article_01.jpg' className="media-object media-img"/>
             </div>
             <div className="media-body">
               <h4>BetIt </h4>
               <span className="category">Industrialization</span>
               <span className="mr-2">August 16, 2018 </span>
               <p>
                  Data Driven tool for bettors.
               </p>
             </div>
           </div>
         </a>
       </div>

       <div className="col-md-12 box-margin">
         <a className="box" href="/data-science/nlp">
           <div className="media-margin">
             <div className="media-left">
               <img src='img/main/Article_03.jpg' className="media-object media-img"/>
             </div>
             <div className="media-body">
               <h4>2018 FIFA Worldcup</h4>
               <span className="category">Industrialization</span>
               <span className="mr-2">May 28, 2018</span>
               <p>
                 Live Artificial Intelligence Dashboard covering every big games during Russian Worldcup.
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

export default IndustrializedComponent;
