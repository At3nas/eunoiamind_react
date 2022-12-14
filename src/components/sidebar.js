import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <nav className="nav nav--sidebar">
                <img src="/src/assets/avatar_test.jpg" className="nav__avatar" alt="Avatar del usuario" />

                <ul className="nav__items">

                    <li className="nav__item">
                        <a href="home.html" className="nav__item__link"><img src="/src/assets/icon-home.svg"
                            className="nav__item__icon" alt="Icono del Home" />Home</a></li>

                    <li className="nav__item"><a href="calendar.html" className="nav__item__link"><img
                        src="/src/assets/icon-calendar.svg" className="nav__item__icon" alt="Icono del Calendario" />Calendario</a></li>

                    <li className="nav__item"><a href="settings.html" className="nav__item__link"><img src="/src/assets/icon-settings.svg" className="nav__item__icon" alt="Icono de Configuración" />Configuración</a></li>


                    <li className="nav__item"><a href="index.html" className="nav__item__link"><img src="/src/assets/icon-logout.svg"
                        className="nav__item__icon" alt="Icono de Cerrar sesión" />Cerrar sesión</a></li>
                </ul>
                
            </nav>
        )
    }
}

export default Sidebar;