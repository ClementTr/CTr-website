import MiniBioComponent from './../../MiniBioComponent';
import React from 'react';

function OPSComponent (){
 return (

   <div className="container">
    <div className="row">

     <div className="col-md-9">
       <div className="title-article">
         <h1 className="title-font">Data OPS Category</h1>
       </div>

       <div className="col-md-12 box-margin">
        <a className="box" href="/data-ops/aws-mongodb">
           <div className="media">
             <img className="align-self-center mr-3 media-object media-img" src='img/main/Article_02.jpg' alt="Generic placeholder image"/>
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

     <div className="col-md-3">
       <MiniBioComponent/>
     </div>

    </div>
   </div>
 )



}

export default OPSComponent;
