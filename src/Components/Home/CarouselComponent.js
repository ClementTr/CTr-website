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
                 <img src="img/main/Carousel_01.jpg" className="carousel-style" alt="First Slide"/>
                 <div className="absolute-div">
                    <div className="carousel-caption">
                        <h3>Extract, Transform & Load</h3>
                        <h3>Pandas Basics with Arsenal F.C. Data</h3>
                    </div>
                  </div>
               </div>
               <div className="item">
                 <img src="img/main/Carousel_02.jpg" className="carousel-style" alt="First Slide"/>
                 <div className="absolute-div">
                    <div className="carousel-caption">
                        <h3>Natural Language Processing</h3>
                        <h3>Legal Document Categorization</h3>
                    </div>
                  </div>
               </div>
               <div className="item">
                 <img src="img/main/Carousel_03.jpg" className="carousel-style" alt="First Slide"/>
                 <div className="absolute-div">
                    <div className="carousel-caption">
                        <h3>Kubernetes Learning App</h3>
                        <h3>Flask Industrialization</h3>
                    </div>
                  </div>
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
