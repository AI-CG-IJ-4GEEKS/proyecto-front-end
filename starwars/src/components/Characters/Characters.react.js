import React, { Component } from 'react';
import axios from 'axios';





//var React = require('react');

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      pagina: 1,
      url: ''
    }
  }
  paginaAnteriorCharacters = () => {
    let pag = this.state.pagina
    if (pag === 1) return null
    pag = pag - 1
    this.setState(
      { pagina: pag },()=>{
        this.componentWillMount();
        this.render();
      });
  }

  paginaSiguienteCharacters = () => {
    let pag = this.state.pagina
    if(pag===9) return null
    pag = pag + 1
    this.setState(
      { pagina: pag },()=>{
        this.componentWillMount();
        this.render();
      }); 
  } 

  


  componentWillMount() {
    var url = 'https://swapi.co/api/people/?page=' + this.state.pagina
    

    axios.get(url)
      .then((response) => {
        console.log(response)
        this.setState({ people: response.data.results })
      }).catch((error) => {
        console.log(error)
      });

  }
  render() {
    var people = this.state.people.map(function (persons) {
      
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <div id="img-top">
            <a id="img-top-a" href="/"><img className="card-img-top" id="img" src={"../../img-characters/"+(persons.name.replace(" ","_"))+".jpg"} alt="" /></a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              {persons.name}
            </h4>
            <hr className="my-4" />
            <p>Species: {persons.species}</p>
            <hr className="my-4" />
            <p>Home Planet: {persons.homeworld}</p>
            <hr className="my-4" />
            <p>Language: {persons.language}</p>
            <hr className="my-4" />
            <p>Movies:</p>
            <hr className="my-4" />

            <hr className="my-4" />
            <ul>
              <li>{persons.films}</li>
            </ul>
            <hr className="my-4" />
          </div>
        </div>
      </div>;

    })
    return (

      <div className="container">
        <h1 className="my-4">Characters</h1>

        <div className="row">
          {people}
        </div>
        <div className="row justify-content-center">
          <div className="py-3">
              <h2>
                <button onClick={this.paginaAnteriorCharacters} type="button" className="btn btn-danger mr-2">Prev</button>
                <span class="badge badge-secondary display-4 mr-2">{this.state.pagina }</span>
                <button onClick={this.paginaSiguienteCharacters} type="button" className="btn btn-danger">Next</button>
              </h2>
                
          </div>
        </div>
      </div>

    );
  }
}

export default Characters;