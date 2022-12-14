import React, { Component } from 'react';

class NavbarIndex extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={require("../assets/logo-manchita.png")} className="navbar__logo" alt="Logo de la aplicación" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/public/index.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#producto">Producto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

export default NavbarIndex;