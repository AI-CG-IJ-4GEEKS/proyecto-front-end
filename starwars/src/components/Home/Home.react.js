import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      films : [],
    }
  }

  componentWillMount(){

      axios.get('https://swapi.co/api/films/')
        .then((response) => {
          console.log(response)
          this.setState({films: response.data.results})
        }).catch((error) => {
          console.log(error)
        });



  }
  render() {
    var films = this.state.films.map(function(film){
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div id="card" className="card h-100">
        <a href="/"><img id={film.title} className="card-img-top" src={'../../img/'+film.title.replace(" ","_")+'.jpg'} alt=""/></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="/">Episode {film.episode_id}</a>
          </h4>
          <ul id="descrip">
            <li>{film.title}</li>
            <li>{film.opening_crawl}</li>
            <li>{film.director}</li>
            <li>{film.producer}</li>
            <li>{film.release_date}</li>
          </ul>
        </div>
      </div>
    </div>;
    
    })
    return (

      <div className="container">
        <h1 className="my-4">Home</h1>

            <div className="row">
            {films}
            </div>
            
      </div>
            
    );
  }
}

export default Home;