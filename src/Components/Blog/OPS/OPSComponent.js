import MiniBioComponent from './../../MiniBioComponent';
import React from 'react';

function OPSComponent (){
 return (

   <div className="container margin-section">

     <div className="col-md-9">
       <div className="title-article">
         <h1 className="title-font">Data OPS Category</h1>
       </div>

       <div className="col-md-12 box-margin">
         <a className="box" href="/data-science/nlp">
           <div className="media-margin">
             <div className="media-left">
               <img src='img/main/Article_02.jpg' className="media-object media-img"/>
             </div>
             <div className="media-body">
               <h4>AWS MongoDB Cluster</h4>
               <span className="category">Data OPS</span>
               <span className="mr-2">March 15, 2018</span>
               <p>
                 How to create an AWS MongoDB Data Structure from scratch?
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

export default OPSComponent;
