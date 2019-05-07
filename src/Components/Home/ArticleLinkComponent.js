import React from 'react';

const divStyle = {
  backgroundImage: "url('img/img1.png')",
};


function ArticleLinkComponent (){
 return (
   <div id="articles-section" className="margin-section">
     <div className="container">
       <div className="row">

         <div className="col-md-6 col-lg-4">
           <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={divStyle}>
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
           <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={divStyle}>
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
           <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={divStyle}>
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
