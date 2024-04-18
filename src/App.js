import PodcastComponent from './Components/Blog/Podcast/PodcastComponent'
import NotFoundComponent from './Components/NotFoundComponent';
import AboutComponent from './Components/About/AboutComponent';
import HomeComponent from './Components/Home/HomeComponent';
import HeaderComponent from './Components/HeaderComponent';
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
            <Route exact path='/data-podcast' component={PodcastComponent}></Route>
            <Route exact path='/ctr-map' component={JourneyComponent}></Route>
            <Route exact path='/about' component={AboutComponent}></Route>
            <Route component={NotFoundComponent}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
