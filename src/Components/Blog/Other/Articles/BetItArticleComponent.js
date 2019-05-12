import MiniBioComponent from './../../../MiniBioComponent';
import React from 'react';

function BetItArticleComponent (){

 return (

   <div className="container margin-section">

     <div className="col-md-9">
       <div className="title-article">
         <h1 className="title-font">BetIt</h1>
         <h3>Data Driven Bets</h3>
         <span className="mr-2 title-date">August 16, 2018 </span>
       </div>

       <div id='video-component'>
         <iframe id="video-article" src="https://drive.google.com/file/d/1mk6Rip3J1hcbl_8LgcgsJ6X-8isv5BPo/preview"></iframe>
       </div>

       <p>
        Official website: <a href="https://betit.ovh">betit.ovh</a>
       </p>


     </div>


     <MiniBioComponent/>
   </div>
 )

}

export default BetItArticleComponent;
