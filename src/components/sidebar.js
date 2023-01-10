import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sass/styles.scss';

class Sidebar extends Component {
  render() {
    return (
      <nav className="nav nav--sidebar">
        <img src={require("../assets/avatar_test.jpg")} className="nav__avatar" alt="Avatar del usuario" />

        <ul className="nav__items">
          <Link to="/home">
            <li className="nav__item">
              <a href="home.html" className="nav__item__link"><img src={require("../assets/icon-home.png")}
                className="nav__item__icon" alt="Icono del Home" />Home</a></li></Link>

          <Link to="/calendario">
            <li className="nav__item"><a href="calendar.html" className="nav__item__link"><img
              src={require("../assets/icon-calendar.png")} className="nav__item__icon" alt="Icono del Calendario" />Calendario</a></li></Link>

          <Link to="/configuracion">
            <li className="nav__item"><a href="settings.html" className="nav__item__link"><img src={require("../assets/icon-settings.png")} className="nav__item__icon" alt="Icono de Configuración" />Configuración</a></li></Link>

          <Link to="/">
            <li className="nav__item"><a href="index.html" className="nav__item__link"><img src={require("../assets/icon-logout.png")}
              className="nav__item__icon" alt="Icono de Cerrar sesión" />Cerrar sesión</a></li></Link>
        </ul>
      </nav>
    )
  }
}

export default Sidebar;