import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sass/styles.scss';

class Bienvenida extends Component {
  render() {
    return (
      <div className="container-fluid-bienvenida" id="fondo-bienvenida">
        <div className="contenedor">
          <h1 className="titulo-bienvenida">¡Bienvenid@ a EunoiaMind!</h1>
        </div>
        <div className="contenedor">
          <img className="logo-bienvenida" src={require("../assets/logo-manchita.png")} alt="" />
        </div>
        <div className="contenedor contenedor-bienvenida">
          <h2 className="subtitulo">Comencemos llenando algunos datos</h2>
        </div>
        <div className="contenedor contenedor-bienvenida">
          <Link to="/pregunta"><button type="button" className="btn1-bienvenida">Comenzar</button></Link>
        </div>
      </div>
    );
  }
}
export default Bienvenida;