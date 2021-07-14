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

       <div className="col-md-12 box-margin">
        <a className="box" href="https://soundcloud.com/moment-donnees/episode-2-fondamentaux-pour-demarrer-en-data-science" target="_blank">
           <div className="media">
             <img className="align-self-center mr-3 media-object media-img" src='img/main/podcast.png' alt="Generic placeholder image"/>
             <div className="media-body">
               <h4>Moment Données, l'apéro data - Épisode 2</h4>
               <span className="category">Podcast</span>
               <span className="mr-2">October 21, 2019</span>
                <ul>
                  <li>Vous vous lancez dans la Data ? Ce poadcast est pour vous ! Retour sur le vocabulaire et les fondamentaux Data</li>
                </ul>
             </div>
           </div>
         </a>
       </div>

       <div className="col-md-12 box-margin">
        <a className="box" href="https://soundcloud.com/moment-donnees/episode-3-suivre-des-etudes-de-medecine-a-lheure-de-lia-le-temoignage-dun-interne" target="_blank">
           <div className="media">
             <img className="align-self-center mr-3 media-object media-img" src='img/main/podcast.png' alt="Generic placeholder image"/>
             <div className="media-body">
               <h4>Moment Données, l'apéro data - Épisode 3</h4>
               <span className="category">Podcast</span>
               <span className="mr-2">October 28, 2019</span>
                <ul>
                  <li>Invité de ce poadcast, Axel Fortel, interne en psychiatrie.</li>
                  <li>Comment la jeune génération des médecins appréhende l'arrivée de l'IA ?</li>
                  <li>Quelles pistes pour intégrer la data science au cursus médical ?</li>
                  <li>La question de la confidentialité des données de santé.</li>
                </ul>
             </div>
           </div>
         </a>
       </div>

       <div className="col-md-12 box-margin">
        <a className="box" href="https://soundcloud.com/moment-donnees/episode-3-suivre-des-etudes-de-medecine-a-lheure-de-lia-le-temoignage-dun-interne" target="_blank">
           <div className="media">
             <img className="align-self-center mr-3 media-object media-img" src='img/main/podcast.png' alt="Generic placeholder image"/>
             <div className="media-body">
               <h4>Moment Données, l'apéro data - Épisode 4</h4>
               <span className="category">Podcast</span>
               <span className="mr-2">January 24, 2020</span>
                <ul>
                  <li>Conversation détendue et informelle</li>
                  <li>Le "data scientist bashing" est-il fondé ?</li>
                  <li>Formations et conférences en 2020</li>
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
