import React, { Component } from 'react';

class MostrarEmociones extends Component {

    render(){
        return(
            <>
            {this.props.objemocion.map(emocion =>
                <div class="emociones_container">
                    <h2>{emocion.pregunta}</h2>
                    
                </div>
                )}
            </>
        )
    }
}

export default MostrarEmociones;