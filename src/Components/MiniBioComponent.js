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
              Head of Data with a knack for running (this part is not true despite the Marathon medal above 🥲) and a passion for Arsenal FC. I've spent 8 years fueling French startups, with a year in NYC. 
              Love exploring America's mid-sized cities through documentaries!
           </p>
           <div id="world-getter">
            <Link to="/ctr-map"><img className="bio-worldmap" src="/img/worldwide.svg" width="30"/></Link>
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
