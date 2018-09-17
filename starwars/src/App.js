import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/shared/NavBar.react';
import Home from './components/Home/Home.react';
import Movies from './components/Films/Films.react';
import Characters from './components/Characters/Characters.react';
import Vehicles from './components/Vehicles/Vehicles.react';
import Starships from './components/Spaceships/Spaceships.react';
import Planets from './components/Planets/Planets.react';


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div>
        <NavBar />
          <Route exact path="/" component={ Home }/>
          <Route path="/Films" component={ Movies }/>
          <Route exact path="/Characters" component={ Characters }/>
          <Route exact path="/Vehicles" component={ Vehicles }/>
          <Route exact path="/Spaceships" component={ Starships }/>
          <Route exact path="/Planets" component={ Planets }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
