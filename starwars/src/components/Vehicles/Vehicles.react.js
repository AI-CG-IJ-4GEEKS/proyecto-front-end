import React, { Component } from 'react';
import axios from 'axios';



class Vehicles extends Component {
  constructor(props){
    super(props);

    this.state = {
      vehicles : []
    }
  }

  componentWillMount(){

      axios.get('https://swapi.co/api/vehicles/')
        .then((response) => {
          console.log(response)
          this.setState({vehicles: response.data.results})
        }).catch((error) => {
          console.log(error)
        });



  }
  render() {
    var vehiculos = this.state.vehicles.map(function(vehicle){
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">
          {vehicle.name}
          </h4>

          <p className="lead">Model: {vehicle.model}</p>
          <hr className="my-4"/>
          <p>Length: {vehicle.length}</p>
          <hr className="my-4"/>
          <p>Crew: {vehicle.crew}</p>
          <hr className="my-4"/>
          <p>Passengers: {vehicle.passengers}</p>
          <hr className="my-4"/>
          <p>Vehicle Class: {vehicle.vehicle_class}</p>
        </div>
      </div>
    </div>
    
    })
    return (

      <div className="container">
        <h1 className="my-4">Vehicles</h1>

            <div className="row">
            {vehiculos}
            </div>
            
      </div>
            
    );
  }
}

export default Vehicles;