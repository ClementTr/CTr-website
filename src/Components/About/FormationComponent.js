import React from 'react';

function FormationComponent (){
 return (
   <div id="section-about">
      <div className="container">
         <div className="row">
             <div className="col-md-6">
                 <img src="img/main/02.jpg" width="80%" className="img-responsive"/>
             </div>
             <div className="col-md-6">
               <div className="about-text">
                   <div className="section-title">
                       <h4>Formation</h4>
                       <hr/>
                       <div className="clearfix"></div>
                   </div>
                   <p className="intro"><strong>Engineer</strong> graduated in Computer Science - <strong><span className="color">Head of Data - Data Engineer</span></strong></p>
                   <ul className="about-list">
                       <li>
                           <span className="fa fa-dot-circle-o"></span>
                           <strong>BME Polytechnic University</strong> - 
                           <p>
                           <em>Bachelor of Engineering in Advanced Data Analysis</em>
                           </p>
                       </li>
                       <li>
                           <span className="fa fa-dot-circle-o"></span>
                           <strong>ESME-Sudria</strong> - 
                           <p>
                           <em>Master's Degree in Computer Science</em>
                           </p>
                       </li>
                       <li>
                           <span className="fa fa-dot-circle-o"></span>
                           <strong>Télécom-ParisTech</strong> - 
                           <p>
                           <em>Master's Degree in Data Engineering & Machine Learning</em>
                           </p>
                       </li>
                   </ul>
               </div>
             </div>
        </div>
     </div>
   </div>
 )
}

export default FormationComponent;
