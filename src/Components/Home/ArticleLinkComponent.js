import React from 'react';

const style_article_01 = {
  backgroundImage: "url('img/main/Article_01.jpg')",
};

const style_article_02 = {
  backgroundImage: "url('img/main/Article_02.jpg')",
};

const style_article_03 = {
  backgroundImage: "url('img/main/Article_03.jpg')",
};


function ArticleLinkComponent (){
 return (
   <div id="articles-section" className="articles">
     <div className="container">
       <div className="row">

         <div className="col-md-6 col-lg-4">
           <a href="/industrialized-projects/betit" className="a-block d-flex align-items-center height-md" style={style_article_01}>
             <div className="text">
               <h3>BetIt</h3>
               <h3>Data Driven Bets</h3>
               <div className="post-meta">
                 <span className="category">Industrialization</span>
                 <span className="mr-2">August 16, 2018 </span>
               </div>
             </div>
           </a>
         </div>

         <div className="col-md-6 col-lg-4">
           <a href="/data-ops/aws-mongodb" className="a-block d-flex align-items-center height-md" style={style_article_02}>
             <div className="text">
               <h3>AWS MongoDB Cluster</h3>
               <h3>Create a Data Structure</h3>
               <div className="post-meta">
                 <span className="category">Data OPS</span>
                 <span className="mr-2">March 15, 2018 </span>
               </div>
             </div>
           </a>
         </div>

         <div className="col-md-6 col-lg-4">
           <a href="/industrialized-projects/worldcup2018" className="a-block d-flex align-items-center height-md" style={style_article_03}>
             <div className="text">
               <h3>2018 FIFA Worldcup</h3>
               <h3>Live AI Dashboard</h3>
               <div className="post-meta">
                 <span className="category">Industrialization</span>
                 <span className="mr-2">May 28, 2018 </span>
               </div>
             </div>
           </a>
         </div>

       </div>
     </div>
   </div>
 )
}

export default ArticleLinkComponent;
