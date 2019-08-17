import MiniBioComponent from './../../MiniBioComponent';
import React from 'react';

function DataPodcastComponent (){
 return (

   <div className="container">
    <div className="row">

     <div className="col-md-9">

       <div className="title-article">
         <h1 className="title-font">Data Podcast Category (French)</h1>
       </div>

       <div className="col-md-12 box-margin">
        <a className="box" href="https://soundcloud.com/moment-donnees/moment-donnees-lapero-data-episode-pilote" target="_blank">
           <div className="media">
             <img className="align-self-center mr-3 media-object media-img" src='img/main/podcast.png' alt="Generic placeholder image"/>
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

     <div className="col-md-3">
       <MiniBioComponent/>
     </div>

    </div>
   </div>
 )



}

export default DataPodcastComponent;
