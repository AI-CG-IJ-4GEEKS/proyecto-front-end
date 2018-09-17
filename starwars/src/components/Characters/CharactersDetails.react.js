import React, { Component } from 'react';
import axios from 'axios';
import Characters from './Characters.react';

class CharDetail extends Component {
    constructor(props){
        super(props)

        this.state = {
            charac: {},
            species: [],
            homeworld: [],
            url: this.props.location.state.url,
        }

        this.getDetailChar(this.state.url);
    }

    getDetailChar = (url) => {
        axios.get(url)
            .then((response) => {
                //console.log(response);
                this.setState({ 
                    charac: response.data, 
                    species: response.data.species,
                    homeworld: response.data.homeworld
                });
            }).catch((error) => {
                console.log(error)
            })
    }
    render(){
        //console.log(this.state.characters);
        let species = this.state.species.map((url) => {
            return <Characters url={url} key={url} />;
        });        
        return <div>
            <h1>Char Detail { this.state.species.name } - { this.state.species.classification } - { this.state.homeworld.name } </h1>
                { Characters }
            </div>;
    }
}

export default CharDetail;