import React from 'react';
import '../styles/sass/styles.scss';


const Login = () => {

    return (
        <>

            <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* <a href="index.html"> */}
                <img src={require("../assets/logo-manchita.png")} className="navbar__logo"
                        alt="Logo de la aplicación"/>
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
                            <a className="nav-link" href="register.html" aria-current="page">Registrarse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  active" href="login.html">Iniciar sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="contenedor">
            <form className="form_registro" action="bienvenida.html" method="GET">
                <h2>INICIA SESIÓN</h2>
                <div className="mb-3 _input">
                    <label for="correo" className="form-label">Correo:</label>
                    <input type="email" className="form-control input_registro" id="correo"/>
                </div>
                <div className="mb-3 _input">
                    <label for="password" className="form-label">Contraseña:</label>
                    <input type="password" className="form-control input_registro" id="password"/>
                </div>
                <div className="div_btn">
                    <button className="btn_submit" type="submit">Registrarse</button>
                </div>
            </form>
        </div>
    </div>
        </>
    )


}
export default Login;