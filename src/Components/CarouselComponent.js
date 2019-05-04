import React from 'react';

function CarouselComponent (){
 return (
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
                   <div className="absolute-div">
                          <div className="carousel-caption">
                              <h3>What we Do</h3>
                          </div>
                    </div>
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
 )

}

export default CarouselComponent;
