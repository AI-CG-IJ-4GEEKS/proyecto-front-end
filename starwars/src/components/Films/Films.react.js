import React, { Component } from 'react';
import axios from 'axios';




class Movies extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies : []
    }
  }

  componentWillMount(){

      axios.get('https://swapi.co/api/films/')
        .then((response) => {
          console.log(response)
          this.setState({movies: response.data.results})
        }).catch((error) => {
          console.log(error)
        });



  }
  render() {
    var film = this.state.movies.map(function(movies){
      return (
        <div class="jumbotron">
                    <h1 class="display-4">Episode {movies.episode_id}</h1>
                    <p class="lead">Title: {movies.title}</p>
                    <p>{movies.opening_crawl}</p>
                    <p>Date: {movies.release_date}</p>
                    <p>Director : {movies.director}</p>
                    <p>Producer(s): {movies.producer}</p>
                    <p class="lead">
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target={"#"+movies.episode_id}aria-expanded="false" aria-controls="collapseExample">
                            Characters in the movie
                        </button>
                    </p>
                      <div class="collapse" id={movies.episode_id}>
                        <div class=" card-body">
                            <ul id="lista-de-personajes-movies">
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                              <li>Nombre de Personaje</li>
                            </ul>
                        </div>
                      </div>      
                </div>
      );
    })
    return (

      <div className="container">
        <h1 className="my-4">Films</h1>

            <div className="row">
            {film}
            </div>
            
      </div>
            
    );
  }
}

export default Movies;

/*<div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">
          {movies.name}
          </h4>

          <p className="lead">Episode: {movies.episode_id}</p>
          <hr className="my-4"/>
          <p>Title: {movies.title}</p>
          <hr className="my-4"/>
          <p>Opening Crawl: {movies.opening_crawl}</p>
          <hr className="my-4"/>
          <p>Date: {movies.release_date}</p>
          <hr className="my-4"/>
          <p>Director: {movies.director}</p>
          <hr className="my-4"/>
          <p>Producer: {movies.producer}</p>
          <hr className="my-4"/>
          <p>Characters: {movies.characters}</p>
        </div>
      </div>
    </div>*/