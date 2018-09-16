import React, { Component } from 'react';
import axios from 'axios';




class Starships extends Component {
  constructor(props){
    super(props);

    this.state = {
      starships : []
    }
  }

  componentWillMount(){

      axios.get('https://swapi.co/api/starships/')
        .then((response) => {
          console.log(response)
          this.setState({starships: response.data.results})
        }).catch((error) => {
          console.log(error)
        });



  }
  render() {
    var starships = this.state.starships.map(function(starship){
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">
          {starship.name}
          </h4>

          <p className="lead">Model: {starship.model}</p>
          <hr className="my-4"/>
          <p>Manufacturer: {starship.manufacturer}</p>
          <hr className="my-4"/>
          <p>Crew: {starship.crew}</p>
          <hr className="my-4"/>
          <p>Passengers: {starship.passengers}</p>
          <hr className="my-4"/>
          <p>Vehicle Class: {starship.starship_class}</p>
        </div>
      </div>
    </div>
    
    })
    return (

      <div className="container">
        <h1 className="my-4">Starships</h1>

            <div className="row">
            {starships}
            </div>
            
      </div>
            
    );
  }
}

export default Starships;