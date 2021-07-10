import AWSMongoArticleComponent from './Components/Blog/OPS/Articles/AWSMongoArticleComponent';
import WC2018ArticleComponent from './Components/Blog/Other/Articles/WC2018ArticleComponent';
import BetItArticleComponent from './Components/Blog/Other/Articles/BetItArticleComponent';
import IndustrializedComponent from './Components/Blog/Other/IndustrializedComponent';
import ETLArticleComponent from './Components/Blog/DS/Articles/ETL/ETLArticleComponent';
import NLPArticleComponent from './Components/Blog/DS/Articles/NLP/NLPArticleComponent';
import VisualizationComponent from './Components/Blog/DV/VisualizationComponent';
import DataScienceComponent from './Components/Blog/DS/DataScienceComponent'
import PodcastComponent from './Components/Blog/Podcast/PodcastComponent'
import NotFoundComponent from './Components/NotFoundComponent';
import AboutComponent from './Components/About/AboutComponent';
import OPSComponent from './Components/Blog/OPS/OPSComponent';
import ContactComponent from './Components/ContactComponent';
import HomeComponent from './Components/Home/HomeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import JourneyComponent from './Components/Map/JourneyComponent';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderComponent/>

          <Switch>
            <Route exact path='/' component={HomeComponent}></Route>
            <Route exact path='/data-ops' component={OPSComponent}></Route>
            <Route exact path='/data-podcast' component={PodcastComponent}></Route>
            <Route exact path='/data-science' component={DataScienceComponent}></Route>
            <Route exact path='/data-visualization' component={VisualizationComponent}></Route>
            <Route exact path='/industrialized-projects' component={IndustrializedComponent}></Route>
            <Route exact path='/ctr-map' component={JourneyComponent}></Route>

            <Route exact path='/about' component={AboutComponent}></Route>
            <Route exact path='/contact' component={ContactComponent}></Route>

            <Route exact path='/data-science/nlp' component={NLPArticleComponent}></Route>
            <Route exact path='/data-science/etl' component={ETLArticleComponent}></Route>
            <Route exact path='/industrialized-projects/betit' component={BetItArticleComponent}></Route>
            <Route exact path='/industrialized-projects/worldcup2018' component={WC2018ArticleComponent}></Route>
            <Route exact path='/data-ops/aws-mongodb' component={AWSMongoArticleComponent}></Route>
            <Route component={NotFoundComponent}></Route>
          </Switch>

        </div>
        <FooterComponent/>
      </Router>
    );
  }
}

export default App;
