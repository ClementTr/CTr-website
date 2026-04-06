import NotFoundComponent from './Components/NotFoundComponent';
import HomeComponent from './Components/Home/HomeComponent';
import HeaderComponent from './Components/HeaderComponent';
import JourneyPage from './Components/Map/JourneyPage';
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
            <Route exact path='/ctr-map' component={JourneyPage}></Route>
            <Route component={NotFoundComponent}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
