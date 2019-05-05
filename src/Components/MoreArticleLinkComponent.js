import React from 'react';

const divStyle = {
  backgroundImage: "url('img/img1.png')",
};

function MoreArticleLinkComponent (){
 return (
    <div className="container">

     <h2 className="title-style">More Blog Posts</h2>

     <div className="col-md-12 box-margin">
       <a className="box" href="/article-etl">
         <div className="media-margin">
           <div className="media-left">
             <img src='img/img1.png' className="media-object media-img"/>
           </div>
           <div className="media-body">
             <h4>Extract, Transform & Load - Pandas Basics</h4>
             <span className="category">ETL</span>
             <span className="mr-2">March 15, 2018 </span>
             <p>
               blablabla
             </p>
           </div>
         </div>
       </a>
     </div>

     <div className="col-md-12 box-margin">
       <a className="box" href="/data-engineering">
         <div className="media-margin">
           <div className="media-left">
             <img src='img/img1.png' className="media-object media-img"/>
           </div>
           <div className="media-body">
             <h4>Architecture</h4>
             <span className="category">Lifestyle</span>
             <span className="mr-2">March 15, 2018 </span>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </p>
           </div>
         </div>
       </a>
     </div>

     <div className="col-md-12 box-margin">
       <a className="box" href="/data-engineering">
         <div className="media-margin">
           <div className="media-left">
             <img src='img/img1.png' className="media-object media-img"/>
           </div>
           <div className="media-body">
             <h4>NLP</h4>
             <span className="category">Lifestyle</span>
             <span className="mr-2">March 15, 2018 </span>
             <p>
              Hihihi
             </p>
           </div>
         </div>
       </a>
     </div>

    </div>
 )

}

export default MoreArticleLinkComponent;
