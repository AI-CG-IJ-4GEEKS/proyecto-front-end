import React from 'react';
import axios from 'axios';


const CharDetailHoWo = (props) => {
    
        axios.get(this.props.planeta)
        .then((response) => {
            let response = response.data.name;
          });

          return <div>
                    <p>{response.data.name}</p>
                </div>



}

        

   /* return()
        var homeworldss = this.state.homeworlds.map(function(homewo){
            return ( <div>
           <p>{homewo.name}</p>
           </div>
          )
          })
          return (
            <div>
                {homeworldss}
            </div>
            
          );
        
}*/
export default CharDetailHoWo;