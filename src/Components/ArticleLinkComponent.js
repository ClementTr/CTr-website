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
               <h3>Extract, Transform & Load</h3>
               <h3>Pandas Basics with Arsenal Football Club</h3>
               <div className="post-meta">
                 <span className="category">ETL</span>
                 <span className="mr-2">March 15, 2018 </span>
               </div>
             </div>
           </a>
         </div>

         <div className="col-md-6 col-lg-4">
           <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={divStyle}>
             <div className="text">
               <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
               <div className="post-meta">
                 <span className="category">Travel</span>
                 <span className="mr-2">March 15, 2018 </span>
               </div>
             </div>
           </a>
         </div>

         <div className="col-md-6 col-lg-4">
           <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={divStyle}>
             <div className="text">
               <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
               <div className="post-meta">
                 <span className="category">Travel</span>
                 <span className="mr-2">March 15, 2018 </span>
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
