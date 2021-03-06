import React from 'react';

const divStyle = {
  backgroundImage: "url('img/img1.png')",
};

function MoreArticleLinkComponent (){
 return (
    <div id="morearticles-section" className="morearticles">
      <div className="container">

       <h2 className="title-style">More Blog Posts</h2>

       <div className="col-md-12 box-margin">
        <a className="box" href="https://soundcloud.com/moment-donnees/moment-donnees-lapero-data-episode-pilote" target="_blank">
           <div className="media">
             <img className="align-self-center mr-3 media-object media-img" src='img/main/More_03.jpg' alt="Generic placeholder image"/>
             <div className="media-body">
               <h4>Moment Données, l'apéro data - Épisode pilote</h4>
               <span className="category">Podcast</span>
               <span className="mr-2">July 2, 2019</span>
                <ul>
                  <li>Une définition des métiers de la donnée, avec un focus sur le Data Scientist</li>
                  <li>Quels sont les pré-requis pour les métiers de la science des données ?</li>
                </ul>
             </div>
           </div>
         </a>
       </div>


      </div>
    </div>
 )

}

export default MoreArticleLinkComponent;
