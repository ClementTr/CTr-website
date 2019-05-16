import React from 'react';

function ETLMenuComponent (){
 return (
   <div className="margintop-navbar blog-menu">
     <div className="col-sm-3">
       <nav className="article-menu" id="myScrollspy">
         <ul className="nav nav-pills nav-stacked">
          <li className="active"><a href="#scraper">Scraper</a></li>
          <li><a href="#transform-featuring">Transform - Data Featuring</a></li>
          <li><a href="#transform-manipulation">Transform - Data Manipulation</a></li>
          <li><a href="#analysis-viz">Analysis & Visualization</a></li>
         </ul>
       </nav>

     </div>
   </div>
 )

}

export default ETLMenuComponent;
