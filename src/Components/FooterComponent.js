import React from 'react';

function FooterComponent (){
 return (
   <div id="footer-section" className="site-footer">
     <div className="container">
       <div className="row">
         <div className="col-md-5">
          <h3>Last Video - USA Road Trip</h3>
          <iframe src="https://drive.google.com/file/d/1xKkC9pKg6U2zowYQ_i4hvBV_QemG6S9J/preview"></iframe>
         </div>
         <div className="col-md-3">
          <h3>Essentials</h3>
          <ul className="list-unstyled">
            <li><a href="https://www.arsenal.com/" target="_blank"><span className="fa fa-futbol-o"></span> Arsenal</a></li>
            <li><a href="https://www.youtube.com/watch?v=JWeJpp0wYMk" target="_blank"><span className="fa fa-music"></span> Orange - Napkey</a></li>
            <li><a href="https://www.youtube.com/watch?v=0jxVnlRdelU" target="_blank"><span className="fa fa-film"></span> 12 Angry Men</a></li>
            <li><a href="https://www.ynharari.com/book/sapiens/" target="_blank"><span className="fa fa-book"></span> Sapiens</a></li>
          </ul>

         </div>
         <div className="col-md-2">
          <h3>Links</h3>
          <ul className="list-unstyled">
            <li><a href="https://betit.ovh/" target="_blank"><img width="17px" src="/img/main/betit-logo.png"/> BetIt</a></li>
            <li><a href="/data-science/etl">ETL</a></li>
            <li><a href="/data-science/nlp">NLP</a></li>
            <li><a href="/data-ops/aws-mongodb">AWS Mongo</a></li>
          </ul>
         </div>
         <div className="col-md-2">
          <h3>Social</h3>
          <ul className="list-unstyled footer-social">
            <li><a href="https://twitter.com/Clement_Tr" target="_blank"><span className="fa fa-twitter"></span> Twitter</a></li>
            <li><a href="https://www.facebook.com/clement.tr.5" target="_blank"><span className="fa fa-facebook"></span> Facebook</a></li>
            <li><a href="https://www.linkedin.com/in/cl%C3%A9ment-tailleur/" target="_blank"><span className="fa fa-linkedin"></span> LinkedIn</a></li>
            <li><a href="https://github.com/ClementTr" target="_blank"><span className="fa fa-github"></span> Github</a></li>
          </ul>
         </div>
      </div>
     </div>
   </div>

 )

}

export default FooterComponent;
