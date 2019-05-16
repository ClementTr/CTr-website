import MiniBioComponent from './../../MiniBioComponent';
import React from 'react';

function IndustrializedComponent (){
 return (
   <div className="container">
    <div className="row">

     <div className="col-md-9">
     
       <div className="title-article">
         <h1 className="title-font">Industralized Projects Category</h1>
       </div>

       <div className="col-md-12 box-margin">
        <a className="box" href="/industrialized-projects/betit">
           <div className="media">
             <img className="align-self-center mr-3 media-object media-img" src='img/main/Article_01.jpg' alt="Generic placeholder image"/>
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
        <a className="box" href="/industrialized-projects/worldcup2018">
           <div className="media">
             <img className="align-self-center mr-3 media-object media-img" src='img/main/Article_03.jpg' alt="Generic placeholder image"/>
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

     <div className="col-md-3">
       <MiniBioComponent/>
     </div>

    </div>
   </div>
 )

}

export default IndustrializedComponent;
