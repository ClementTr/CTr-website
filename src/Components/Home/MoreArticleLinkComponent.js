import React from 'react';

const divStyle = {
  backgroundImage: "url('img/img1.png')",
};

function MoreArticleLinkComponent (){
 return (
    <div id="morearticles-section" className="morearticles">
      <div className="container">

       <h2 className="title-style">More Blog Posts</h2>

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
    </div>
 )

}

export default MoreArticleLinkComponent;
