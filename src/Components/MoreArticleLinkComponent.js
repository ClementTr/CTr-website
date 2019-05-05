import React from 'react';

const divStyle = {
  backgroundImage: "url('img/img1.png')",
};

function MoreArticleLinkComponent (){
 return (
    <div className="container">

     <h2 className="">More Blog Posts</h2>

     <div className="col-md-12">
       <div className="media">
         <div className="media-left">
           <img src='img/img1.png' className="media-object media-img"/>
         </div>
         <div className="media-body">
           <h4 className="">Neural Net</h4>
           <span className="category">Lifestyle</span>
           <span className="mr-2">March 15, 2018 </span>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>
       </div>
     </div>

     <div className="col-md-12">
       <div className="media">
         <div className="media-left">
           <img src='img/img1.png' className="media-object media-img"/>
         </div>
         <div className="media-body">
           <h4 className="">Architecture</h4>
           <span className="category">Lifestyle</span>
           <span className="mr-2">March 15, 2018 </span>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>
       </div>
     </div>

     <div className="col-md-12">
       <div className="media">
         <div className="media-left">
           <img src='img/img1.png' className="media-object media-img"/>
         </div>
         <div className="media-body">
           <h4 className="">Natural Language Processing</h4>
           <span className="category">Lifestyle</span>
           <span className="mr-2">March 15, 2018 </span>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>
       </div>
     </div>

    </div>
 )

}

export default MoreArticleLinkComponent;
