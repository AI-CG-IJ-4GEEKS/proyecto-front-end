import React, { Component } from 'react';
import axios from 'axios';



class Vehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      pagina: 1,
      url: ''
    }
  }

  paginaAnteriorVehicles = () => {
    let pag = this.state.pagina
    if (pag === 1) return null
    pag = pag - 1
    this.setState(
      { pagina: pag }, () => {
        this.componentWillMount();
        this.render();
      });
  }

  paginaSiguienteVehicles = () => {
    let pag = this.state.pagina
    if (pag === 4) return null
    pag = pag + 1
    this.setState(
      { pagina: pag }, () => {
        this.componentWillMount();
        this.render();
      });
  }

  componentWillMount() {
    var url = 'https://swapi.co/api/vehicles/?page=' + this.state.pagina

    axios.get(url)
      .then((response) => {
        console.log(response)
        this.setState({ vehicles: response.data.results })
      }).catch((error) => {
        console.log(error)
      });



  }
  render() {
    var vehiculos = this.state.vehicles.map(function (vehicle) {
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <div className="card-body">
            <h4 className="card-title">
              {vehicle.name}
            </h4>

            <p className="lead">Model: {vehicle.model}</p>
            <hr className="my-4" />
            <p>Length: {vehicle.length}</p>
            <hr className="my-4" />
            <p>Crew: {vehicle.crew}</p>
            <hr className="my-4" />
            <p>Passengers: {vehicle.passengers}</p>
            <hr className="my-4" />
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
        <div className="row justify-content-center">
          <div className="py-3">
            <h2>
              <button onClick={this.paginaAnteriorVehicles} type="button" className="btn btn-danger mr-2">Prev</button>
              <span class="badge badge-secondary display-4 mr-2">{this.state.pagina}</span>
              <button onClick={this.paginaSiguienteVehicles} type="button" className="btn btn-danger">Next</button>
            </h2>

          </div>
        </div>

      </div>

    );
  }
}

export default Vehicles;