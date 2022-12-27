import React, { Component } from 'react';

import NavbarIndex from '../components/navbarIndex';
import SliderIndex from '../components/sliderIndex';
import ModalFormComponent from './modal_registro';
import {createUser} from '../services/usuarioServices'
import '../styles/sass/styles.scss';

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                {/* <!-- Navbar --> */}
                <NavbarIndex />
                <div className="flex-container">
                    <img src={require("../assets/plant-hanging1.png")} className="img__hangingPlant hidden-mobile" alt="Ilustración decorativa de una planta colgante" />
                </div>
                {/* <!-- Título (oculto) --> */}
                <br />
                <h1 id="h1-index">EunoiaMind</h1>
                <br />
                {/* <!-- Header --> */}
                <header className="header">
                    <div className="header__div__logo">
                        <img src={require("../assets/logo-circulo.png")} className="header__logo" alt="Logo de la app" />
                    </div>

                    <div className="header__div__texts">
                        <p className="header__eslogan">
                            Conoce tu mente,
                            identifica tus emociones
                        </p>
                        <p className="header__desc">Una aplicación web que te permite registrar, visualizar y comprender la
                            forma
                            en la que te sientes</p>
                    </div>

                    <div className="header__buttons">
                        <ModalFormComponent
                        createUser={createUser}
                        />
                        <a href="/public/login.html"><button type="button" className="btn header__btn">Iniciar sesión</button></a>
                    </div>
                </header>

                {/* <!-- Producto --> */}
                <section className="section" id="producto">
                    <h2 className="section__h2">Producto</h2>
                    <p className="section__p">Lee más acerca de las características y funciones de EunoiaMind</p>
                    <br />
                    <div className="section__div__cards">
                        <div className="card">
                            <img src={require("../assets/placeholder1.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Diseño bonito y simple</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img src={require("../assets/placeholder2.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Registra tus emociones</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img src={require("../assets/placeholder2.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Lorem Ipsum</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Nosotros --> */}
                <section className="section" id="nosotros">
                    <h2 className="section__h2">Nosotros</h2>
                    <p className="section__p">Conoce qué nos motivo a desarrollar esta aplicación</p>
                    <br />
                    <SliderIndex />
                </section>


                {/* <!-- Contacto --> */}
                <section className="section" id="contacto">
                    <h2 className="section__h2">Contacto</h2>
                    <p className="section__p">¿Tienes alguna duda, sugerencia o problema? ¡Contáctanos!</p>

                    <div className="section__div">
                        <form className="section__form center-element">
                            <div className="section__form__fullname">
                                <div className="section__form__fullname__f-name">
                                    <label for="f-name">Nombre:</label>
                                    <input type="text" id="f-name" name="f-name" />
                                </div>
                                <div className="section__form__fullname__l-name">
                                    <label for="l-name">Apellido:</label>
                                    <input type="text" id="l-name" name="l-name" />
                                </div>
                            </div>

                            <div className="section__form__email">
                                <label for="email">Correo electrónico:</label>
                                <br />
                                <input type="email" id="email" />
                            </div>

                            <div className="section__form__motivo">
                                <label>Motivo:</label>
                                <select class="form-select">
                                    <option>Consultas</option>
                                    <option>Sugerencias</option>
                                    <option>Problemas</option>
                                </select>
                            </div>
                            <div className="section__form__texto">
                                <label for="textolibre">Escriba lo que quiera comunicarnos:</label>
                                <br />
                                <textarea id="textolibre" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn-form">Enviar</button>
                        </form>
                    </div>
                </section>

                {/* <!-- Footer --> */}
                <footer>

                </footer>
            </div>
        );
    }
}
export default Main;