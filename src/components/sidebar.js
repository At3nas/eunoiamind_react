import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <nav className="nav nav--sidebar">
                <img src={require("../assets/avatar_test.jpg")} className="nav__avatar" alt="Avatar del usuario" />

                <ul className="nav__items">

                    <li className="nav__item">
                        <Link to={"/home"} className="nav__item__link">
                            <img src={require("../assets/home.png")}
                            className="nav__item__icon" alt="Icono del Home" />Home</Link>
                    </li>

                    <li className="nav__item">
                    <Link to={"/calendario"} className="nav__item__link">
                            <img src={require("../assets/calendario.png")} className="nav__item__icon" alt="Icono del Calendario" />Calendario
                    </Link>
                    </li>

                    <li className="nav__item">
                    <Link to={"/configuraciones"} className="nav__item__link">
                            <img src={require("../assets/configuraciones.png")} className="nav__item__icon" alt="Icono de Configuración" />Configuración
                    </Link>
                    </li>


                    <li className="nav__item">
                    <Link to={"/"} className="nav__item__link">
                            <img src={require("../assets/cerrar-sesion.png")} className="nav__item__icon" alt="Icono de Cerrar sesión" />Cerrar sesión
                    </Link>
                    </li>
                </ul>
                
            </nav>
        )
    }
}

export default Sidebar;