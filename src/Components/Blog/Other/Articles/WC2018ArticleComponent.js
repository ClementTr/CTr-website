import MiniBioComponent from './../../../MiniBioComponent';
import React from 'react';

function WC2018ArticleComponent (){
 return (

   <div className="container margin-section">

     <div className="col-md-9">
       <div className="title-article">
         <h1 className="title-font">2018 FIFA Worldcup</h1>
         <h3>AI Dashboard</h3>
         <span className="mr-2 title-date">May 28, 2018</span>
       </div>

       <div className='article-content'>
        <img width='100%' src='/img/wc2018/S1.png'/>
        <img width='100%' src='/img/wc2018/S2.png'/>
        <img width='50%' src='/img/wc2018/S3.png'/>
        <img width='50%' src='/img/wc2018/S4.png'/>
       </div>

     </div>


     <MiniBioComponent/>
   </div>
 )

}

export default WC2018ArticleComponent;
