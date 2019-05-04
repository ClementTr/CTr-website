import React from 'react';

const divStyle = {
  backgroundImage: "url('img/img1.png')",
};


function ArticleLinkComponent (){
 return (
   <section className="site-section pt-5 margin-section">
     <div className="container">
       <div className="row">

         <div className="col-md-6 col-lg-4">
           <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={divStyle}>
             <div className="text">
               <div className="post-meta">
                 <span className="category">Lifestyle</span>
                 <span className="mr-2">March 15, 2018 </span> &bullet;
               </div>
               <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
             </div>
           </a>
         </div>

         <div className="col-md-6 col-lg-4">
           <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={divStyle}>
             <div className="text">
               <div className="post-meta">
                 <span className="category">Travel</span>
                 <span className="mr-2">March 15, 2018 </span> &bullet;
               </div>
               <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
             </div>
           </a>
         </div>

         <div className="col-md-6 col-lg-4">
           <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={divStyle}>
             <div className="text">
               <div className="post-meta">
                 <span className="category">Food</span>
                 <span className="mr-2">March 15, 2018 </span> &bullet;
               </div>
               <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
             </div>
           </a>
         </div>

       </div>
     </div>
   </section>
 )
}

export default ArticleLinkComponent;
