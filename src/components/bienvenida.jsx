import React,{Component} from 'react';
import './styles/sass/styles.scss';

class Bienvenida extends Component{
    render(){
        return(
            <div className="container-fluid" id="fondo">
                <div className="contenedor">
                    <h1 className="titulo-bienvenida">¡Bienvenid@ a EunoiaMind!</h1>
                </div>
                <div className="contenedor">
                    <img className="logo" src="../src/assets/logo-manchita.png"alt/>
                </div>
                <div className="contenedor">
                    <h2 className="subtitulo">Comencemos llenando algunos datos</h2>
                </div>
                <div className="contenedor">
                    <a href="pregunta.html"><button type="button" className="btn1">Comenzar</button></a>
                </div>
            </div>
        );
    }
}
export default Bienvenida;