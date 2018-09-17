import React, { Component } from 'react';
import axios from 'axios';




class Planets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
      pagina: 1,
      url: ''
    }
  }
  paginaAnteriorPlanets = () => {
    let pag = this.state.pagina
    if (pag === 1) return null
    pag = pag - 1
    this.setState(
      { pagina: pag }, () => {
        this.componentWillMount();
        this.render();
      });
  }

  paginaSiguientePlanets = () => {
    let pag = this.state.pagina
    if (pag === 7) return null
    pag = pag + 1
    this.setState(
      { pagina: pag }, () => {
        this.componentWillMount();
        this.render();
      });
  }

  componentWillMount() {
    var url = 'https://swapi.co/api/planets/?page=' + this.state.pagina
    axios.get(url)
      .then((response) => {
        console.log(response)
        this.setState({ planets: response.data.results })
      }).catch((error) => {
        console.log(error)
      });



  }
  render() {
    var planetas = this.state.planets.map(function (planets) {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">
                {planets.name}
              </h4>
              <hr className="my-4" />
              <p className="lead">Diameter: {planets.diameter}</p>
              <hr className="my-4" />
              <p>Climate: {planets.climate}</p>
              <hr className="my-4" />
              <p>Terrain: {planets.terrain}.</p>
              <hr className="my-4" />
              <p>Water Surface: {planets.surface_water}</p>
              <hr className="my-4" />
              <p>Population: {planets.population}</p>
              <hr className="my-4" />
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
        <div className="row justify-content-center">
          <div className="py-3">
            <h2>
              <button onClick={this.paginaAnteriorPlanets} type="button" className="btn btn-danger mr-2">Prev</button>
              <span class="badge badge-secondary display-4 mr-2">{this.state.pagina}</span>
              <button onClick={this.paginaSiguientePlanets} type="button" className="btn btn-danger">Next</button>
            </h2>

          </div>
        </div>

      </div>

    );
  }
}

export default Planets;