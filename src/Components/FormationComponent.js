import { Document } from 'react-pdf'
import React from 'react';

function FormationComponent (){
 return (
   <div id="section-about">
      <div className="container">
         <div className="row">
             <div className="col-md-6">
                 <img src="img/main/02.jpg" height="100px" className="img-responsive"/>
             </div>
             <div className="col-md-6">
               <div className="about-text">
                   <div className="section-title">
                       <h4>Formation</h4>
                       <h2>Some words <strong>about my studies</strong></h2>
                       <hr/>
                       <div className="clearfix"></div>
                   </div>
                   <p className="intro"><strong>Mathematical</strong> profile, <strong><span className="color">engineer</span></strong> graduated in <strong>IT</strong></p>
                   <ul className="about-list">
                       <li>
                           <span className="fa fa-dot-circle-o"></span>
                           <strong>High School Degree</strong> - <em>science option obtained with honours</em>
                       </li>
                       <li>
                           <span className="fa fa-dot-circle-o"></span>
                           <strong>BME Polytechnic University</strong> - <em>Budapest: international semester in computer science</em>
                       </li>
                       <li>
                           <span className="fa fa-dot-circle-o"></span>
                           <strong>ESME-Sudria</strong> - <em>Paris: engineering degree</em>
                       </li>
                       <li>
                           <span className="fa fa-dot-circle-o"></span>
                           <strong>Télécom-ParisTech</strong> - <em>Paris: Big Data expertise</em>
                       </li>
                   </ul>
                   <br/>
                   <br/>
                   <a href="/Resume_Tailleur.pdf" target="_blank" className="btn btn-primary btn-sm">GET MY RESUME</a>
               </div>
             </div>
        </div>
     </div>
   </div>
 )
}

export default FormationComponent;
