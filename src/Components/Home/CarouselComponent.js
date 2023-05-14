import React from 'react';

function CarouselComponent (){
 return (
     <div className="bs-example">

       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="img/main/Carousel_01.jpg" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
              {/*<a href='/data-science/etl' className='carousel-linker'>
                <h5>Extract, Transform & Load</h5>
                <p>Pandas Basics with Arsenal F.C. Data</p>
              </a>*/}
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="img/main/Carousel_02.jpg" alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block">
              {/*<a href='/data-science/nlp' className='carousel-linker'>
                <h5>Natural Language Processing</h5>
                <p>Legal Document Categorization</p>
              </a>*/}
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="img/main/Carousel_03.jpg" alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
              {/*<h5>Kubernetes Learning App</h5>
              <p>Flask Industrialization</p>*/}
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>
 )
}

export default CarouselComponent;
