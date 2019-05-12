import React from 'react';

function MiniBioComponent (){
 return (
   <div className="col-md-3 margintop-navbar">
     <div className="sidebar-box">
       <div className="bio text-center">
         <img src="/img/main/01.jpg" alt="Placeholder" className="img-fluid bio-profile"/>
         <div className="bio-body">
           <h2 className="bio-title">Clément Tailleur</h2>
           <h6 className="bio-title">clement.tailleur@gmail.com</h6>
           <h6 className="bio-title">(+33) 6.43.63.32.29</h6>
           <p className="bio-text">
            Data OPS Engineer - Arsenal Fan<br/>
            Studied in Paris & Budapest<br/>
            Worked in Nice & New York<br/>
            Ran the Paris Marathon<br/>
            Entrepreneur & Data Poadcaster
           </p>
           <div id="world-getter" className="font-world">
             GET MY WORLD <i className="fa fa-arrow-right" aria-hidden="true"></i> <a href="/ctr-map"><img className="bio-worldmap" src="/img/worldwide.svg" width="30"/></a>
           </div>
           <p><a href="/Resume_Tailleur.pdf" target="_blank"  className="btn btn-primary btn-sm">GET MY RESUME</a></p>
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
