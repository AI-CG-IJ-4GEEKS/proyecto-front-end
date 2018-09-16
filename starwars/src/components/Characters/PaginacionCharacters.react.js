import React, { Component }from 'react';

class PaginacionCharacters extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            pagina : 1
        }
    }
    
    paginaAnteriorCharacters = ()=>{
        console.log('anterior...');
        var pagina = this.state.pagina
        pagina -= 1
        this.setState({pagina})
    }

   paginaSiguienteCharacters= ()=>{
        console.log('siguiente...');
    }
    render(){
       
        return ( <div className="py-3">
                    <button onClick= {this.paginaAnteriorCharacters} type="button" className="btn btn-danger mr-5">Previous</button>
                    <button onClick={this.paginaSiguienteCharacters} type="button" className="btn btn-danger">Next</button>
                </div>
            
          ); 

    }
   
}

export default PaginacionCharacters;