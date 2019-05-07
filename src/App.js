import IndustrializedComponent from './Components/Blog/Other/IndustrializedComponent';
import ETLArticleComponent from './Components/Blog/DS/Articles/ETLArticleComponent';
import VisualizationComponent from './Components/Blog/DV/VisualizationComponent';
import EngineeringComponent from './Components/Blog/DE/EngineeringComponent';
import LearningComponent from './Components/Blog/DS/LearningComponent'
import NotFoundComponent from './Components/NotFoundComponent';
import AboutComponent from './Components/About/AboutComponent';
import ContactComponent from './Components/ContactComponent';
import HomeComponent from './Components/Home/HomeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import MapComponent from './Components/Map/MapComponent';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
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
            <Route exact path='/data-engineering' component={EngineeringComponent}></Route>
            <Route exact path='/machine-learning' component={LearningComponent}></Route>
            <Route exact path='/data-visualization' component={VisualizationComponent}></Route>
            <Route exact path='/industrialized-projects' component={IndustrializedComponent}></Route>
            <Route exact path='/ctr-map' component={MapComponent}></Route>

            <Route exact path='/about' component={AboutComponent}></Route>
            <Route exact path='/contact' component={ContactComponent}></Route>

            <Route exact path='/article-etl' component={ETLArticleComponent}></Route>
            <Route component={NotFoundComponent}></Route>
          </Switch>

        </div>
        <FooterComponent/>
      </Router>
    );
  }
}

export default App;
