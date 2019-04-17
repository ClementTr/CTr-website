import React from 'react';

function HomeComponent (){
 return (
   <div id="tf-home">
    <section className="margintop-navbar">
     <div className="container">
       <div className="row">

         <div className="col-md-9">
           <div className="bs-example">
             <div id="myCarousel" className="carousel slide" data-ride="carousel">
                 <ol className="carousel-indicators">
                     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                     <li data-target="#myCarousel" data-slide-to="1"></li>
                     <li data-target="#myCarousel" data-slide-to="2"></li>
                 </ol>
                 <div className="carousel-inner">
                     <div className="item active">
                         <img src="img/main/Photo_01.jpg" className="carousel-style" alt="First Slide"/>
                     </div>
                     <div className="item">
                         <img src="img/main/Photo_02.jpg" height='100' alt="Second Slide"/>
                     </div>
                     <div className="item">
                         <img src="img/main/Photo_03.jpg" height='100' alt="Third Slide"/>
                     </div>
                 </div>
                 <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                     <span className="glyphicon glyphicon-chevron-left"></span>
                 </a>
                 <a className="carousel-control right" href="#myCarousel" data-slide="next">
                     <span className="glyphicon glyphicon-chevron-right"></span>
                 </a>
             </div>
           </div>
         </div>

         <div className="col-md-3 margintop-navbar">
           <div className="sidebar-box">
             <div className="bio text-center">
               <img src="img/main/02.jpg" alt="Placeholder" className="img-fluid"/>
               <div className="bio-body">
                 <h2 className="bio-title">Clément Tailleur</h2>
                 <p>

                 </p>
                 <p><a href="#" className="btn btn-primary btn-sm">Get my Resume</a></p>
                 <p className="social">
                  <a href="https://github.com/ClementTr" target="_blank" className="p-2"><span className="fa fa-github"></span></a>&nbsp;&nbsp;
                  <a href="https://www.linkedin.com/in/cl%C3%A9ment-tailleur/" target="_blank" className="p-2"><span className="fa fa-linkedin"></span></a>&nbsp;&nbsp;
                  <a href="https://www.facebook.com/clement.tr.5" target="_blank" className="p-3"><span className="fa fa-facebook"></span></a>&nbsp;&nbsp;
                  <a href="https://twitter.com/Clement_Tr" target="_blank" className="p-2"><span className="fa fa-twitter"></span></a>
                 </p>
               </div>
             </div>
           </div>
         </div>

       </div>
      </div>
    </section>
   </div>
 )



}

export default HomeComponent;
