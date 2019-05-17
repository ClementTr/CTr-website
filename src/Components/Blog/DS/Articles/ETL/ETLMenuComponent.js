import React from 'react';

function ETLMenuComponent (){
 return (
     <div id='etl-menu' className="margintop-navbar article-menu">
       <div className="col-sm-12" id='etl-menu-center'>
         <nav id="etlScrollspy">
           <ul className="nav nav-pills nav-stacked">
            <li><a href="#scraper">Scraper</a></li>
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
