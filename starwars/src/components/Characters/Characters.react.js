import React, { Component } from 'react';
import axios from 'axios';
import PaginacionCharacters from './PaginacionCharacters.react';



//var React = require('react');

class Characters extends Component {
  constructor(props){
    super(props);

    this.state = {
      people : [],
      pagina : 2,
      next:"",
      url:''
    }  
  }


  componentWillMount(){
      var url ='https://swapi.co/api/people/?page=' + this.state.pagina
      this.setState({url:'https://swapi.co/api/people/?page=' + this.state.pagina})
      axios.get(url)
        .then((response) => {
          console.log(response)
          this.setState({people: response.data.results})
          this.setState({next: response.data.next})
        }).catch((error) => {
          console.log(error)
        });

  }
  render() {
    
    var people = this.state.people.map(function(persons){
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <div id="img-top">
          <a id="img-top-a" href="/"><img className="card-img-top" id="img" src="../../img-characters/luke_skywalker.jpg" alt=""/></a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            {persons.name}
          </h4>
          <hr className="my-4"/>
          <p>Species: {persons.species}</p>
          <hr className="my-4"/>
          <p>Home Planet: {persons.homeworld}</p>
          <hr className="my-4"/>
          <p>Language: {persons.language}</p>
          <hr className="my-4"/>
          <p>Movies:</p>
          <hr className="my-4"/>
          
          <hr className="my-4"/>
          <ul>
            <li>{persons.films}</li>
          </ul>
          <hr className="my-4"/>
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
              <PaginacionCharacters/>
            </div> 
      </div>
            
    );
  }
}

export default Characters;