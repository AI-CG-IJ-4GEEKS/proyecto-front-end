import React, { Component } from 'react';
import axios from 'axios';




class Starships extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starships: [],
      pagina: 1,
      url: ''
    }
  }
  paginaAnteriorStarships = () => {
    let pag = this.state.pagina
    if (pag === 1) return null
    pag = pag - 1
    this.setState(
      { pagina: pag }, () => {
        this.componentWillMount();
        this.render();
      });
  }

  paginaSiguienteStarships = () => {
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
    var url = 'https://swapi.co/api/starships/?page=' + this.state.pagina

    axios.get(url)
      .then((response) => {
        console.log(response)
        this.setState({ starships: response.data.results })
      }).catch((error) => {
        console.log(error)
      });



  }
  render() {
    var starships = this.state.starships.map(function (starship) {
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <div className="card-body">
            <h4 className="card-title">
              {starship.name}
            </h4>

            <p className="lead">Model: {starship.model}</p>
            <hr className="my-4" />
            <p>Manufacturer: {starship.manufacturer}</p>
            <hr className="my-4" />
            <p>Crew: {starship.crew}</p>
            <hr className="my-4" />
            <p>Passengers: {starship.passengers}</p>
            <hr className="my-4" />
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
        <div className="row justify-content-center">
          <div className="py-3">
            <h2>
              <button onClick={this.paginaAnteriorStarships} type="button" className="btn btn-danger mr-2">Prev</button>
              <span class="badge badge-secondary display-4 mr-2">{this.state.pagina}</span>
              <button onClick={this.paginaSiguienteStarships} type="button" className="btn btn-danger">Next</button>
            </h2>

          </div>
        </div>

      </div>

    );
  }
}

export default Starships;