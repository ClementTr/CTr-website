import {Link} from 'react-router-dom';
import React from 'react';

function MiniBioComponent (){
 return (
   <div id='mini-bio' className="minibio-margins">
     <div className="sidebar-box">
       <div className="bio text-center">
         <img src="/img/main/01.jpg" alt="Placeholder" className="img-fluid bio-profile"/>
         <div className="bio-body">
           <h2 className="bio-title">Clément Tailleur</h2>
           <p className="bio-text">
           </p>
           <div id="world-getter" className="font-world">
             GET MY WORLD <i className="fa fa-arrow-right" aria-hidden="true"></i> <Link to="/ctr-map"><img className="bio-worldmap" src="/img/worldwide.svg" width="30"/></Link>
           </div>
           <p className="social">
            <a href="https://github.com/ClementTr" target="_blank" className="p-2"><span className="fa fa-github"></span></a>&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-tailleur/" target="_blank" className="p-2"><span className="fa fa-linkedin"></span></a>&nbsp;&nbsp;
            <a href="https://www.facebook.com/clement.tr.5" target="_blank" className="p-3"><span className="fa fa-facebook"></span></a>&nbsp;&nbsp;
            <a href="https://twitter.com/Clement_Tr" target="_blank" className="p-2"><span className="fa fa-twitter"></span></a>&nbsp;&nbsp;
           </p>
         </div>
       </div>
     </div>
   </div>
 )

}

export default MiniBioComponent;
