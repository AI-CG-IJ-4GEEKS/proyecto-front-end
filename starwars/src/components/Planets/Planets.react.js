import React, { Component } from 'react';
import axios from 'axios';




class Planets extends Component {
  constructor(props){
    super(props);

    this.state = {
      planets : []
    }
  }

  componentWillMount(){

      axios.get('https://swapi.co/api/planets/')
        .then((response) => {
          console.log(response)
          this.setState({planets: response.data.results})
        }).catch((error) => {
          console.log(error)
        });



  }
  render() {
    var planetas = this.state.planets.map(function(planets){
      return (
      <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">
          {planets.name}
          </h4>
          <hr className="my-4"/>
          <p className="lead">Diameter: {planets.diameter}</p>
          <hr className="my-4"/>
          <p>Climate: {planets.climate}</p>
          <hr className="my-4"/>
          <p>Terrain: {planets.terrain}.</p>
          <hr className="my-4"/>
          <p>Water Surface: {planets.surface_water}</p>
          <hr className="my-4"/>
          <p>Population: {planets.population}</p>
          <hr className="my-4"/>
        </div>
      </div>
    </div>
    )
    })
    return (

      <div className="container">
        <h1 className="my-4">Planets</h1>

            <div className="row">
            {planetas}
            </div>
            
      </div>
            
    );
  }
}

export default Planets;