import React, { Component } from 'react';

class NavbarForm extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a href="index.html"><img src={require("../src/assets/logo-manchita.svg")} className="navbar__logo"
                        alt="Logo de la aplicación" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="register.html">Registrarse</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="login.html" aria-current="page">Iniciar sesión</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavbarForm;