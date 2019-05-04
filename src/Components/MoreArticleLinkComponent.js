import React from 'react';

const divStyle = {
  backgroundImage: "url('img/img1.png')",
};

function MoreArticleLinkComponent (){
 return (
   <div className="row mb-5 mt-5">

     <div className="col-md-12">
       <h2 className="mb-4">More Blog Posts</h2>
     </div>

     <div className="col-md-12">

       <div className="post-entry-horzontal">
         <a href="blog-single.html">
           <div className="image element-animate" data-animate-effect="fadeIn" style={divStyle}></div>
           <span className="text">
             <div className="post-meta">
               <span className="category">Travel</span>
               <span className="mr-2">March 15, 2018 </span>
             </div>
             <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
           </span>
         </a>
       </div>

       <div className="post-entry-horzontal">
         <a href="blog-single.html">
           <div className="image element-animate" data-animate-effect="fadeIn" style={divStyle}></div>
           <span className="text">
             <div className="post-meta">
               <span className="category">Lifestyle</span>
               <span className="mr-2">March 15, 2018 </span>
             </div>
             <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
           </span>
         </a>
       </div>

       <div className="post-entry-horzontal">
         <a href="blog-single.html">
           <div className="image element-animate" data-animate-effect="fadeIn" style={divStyle}></div>
           <span className="text">
             <div className="post-meta">
               <span className="category">Food</span>
               <span className="mr-2">March 15, 2018 </span>
             </div>
             <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
           </span>
         </a>
       </div>

     </div>
   </div>
 )

}

export default MoreArticleLinkComponent;
