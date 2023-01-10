import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sass/styles.scss';

const Welcome = () => {
    return (
        <div className="container-fluid" id="fondo">
            <div className="contenedor">
                <h1 className="titulo-bienvenida">¡Bienvenid@ a EunoiaMind!</h1>
            </div>
            <div className="contenedor">
                <img className="logo" src={require("../assets/logo-manchita.png")} alt="" />
            </div>
            <div className="contenedor">
                <h2 className="subtitulo">Comencemos llenando algunos datos</h2>
            </div>
            <div className="contenedor">
                <Link to={"/pregunta"}><button type="button" className="btn1">Comenzar</button></Link>
            </div>
        </div>
    );
};

export default Welcome;