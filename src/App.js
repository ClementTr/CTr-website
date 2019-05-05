import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import EngineeringComponent from './Components/EngineeringComponent';
import LearningComponent from './Components/LearningComponent'
import VisualizationComponent from './Components/VisualizationComponent';
import IndustrializedComponent from './Components/IndustrializedComponent';
import HomeComponent from './Components/HomeComponent';
import AboutComponent from './Components/AboutComponent';
import ContactComponent from './Components/ContactComponent';
import MapComponent from './Components/MapComponent';
import HeaderComponent from './Components/HeaderComponent';
import ETLArticleComponent from './Components/ETLArticleComponent';
import NotFoundComponent from './Components/NotFoundComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderComponent></HeaderComponent>

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
      </Router>
    );
  }
}

export default App;
