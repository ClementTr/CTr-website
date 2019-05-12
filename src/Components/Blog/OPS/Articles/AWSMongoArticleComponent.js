import MiniBioComponent from './../../../MiniBioComponent';
import React from 'react';

function AWSMongoArticleComponent (){
 return (

   <div className="container margin-section">

     <div className="col-md-9">
       <div className="title-article">
         <h1 className="title-font">AWS MongoDB Cluster</h1>
         <h3>Create a Data Structure</h3>
         <span className="mr-2 title-date">February 02, 2018 </span>
       </div>


       <div id='video-component'>
         <iframe id='video-article' src="https://www.youtube.com/embed/NZR1C0u1SMI"></iframe>
       </div>

     </div>

     <MiniBioComponent/>
   </div>
 )

}

export default AWSMongoArticleComponent;
