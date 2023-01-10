import React, { Component } from 'react';
import NavbarIndex from '../components/navbarIndex';
import SliderIndex from '../components/sliderIndex';
import ModalFormComponent from './modal_registro';
import ModalIngresoComponent from './modal_ingreso';
import { createUser } from '../services/usuarioServices'
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
            <ModalIngresoComponent
              createUser={createUser}
            />
          </div>
        </header>

        {/* <!-- Producto --> */}
        <section className="section" id="producto">
          <h2 className="section__h2">Producto</h2>
          <p className="section__p">Lee más acerca de las características y funciones de EunoiaMind</p>
          <br />
          <div className="section__div__cards">

            <div className="card">
              <img src={require("../assets/home-foto.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Interfaz bonita y simple</h3>
                <p className="card-text">
                  EunoiaMind se caracteriza por tener un diseño bonito y un funcionamiento sencillo para ser usado por cualquier usuario. Podrás adaptarte sin problemas a su intuitiva interfaz en poco tiempo.
                </p>
              </div>
            </div>

            <div className="card">
              <img src={require("../assets/muro-foto.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Escribe cómo te sientes</h3>
                <p className="card-text">Cuando agregas una emoción, tienes la opción de escribir lo que desees. Puedes contar por qué te sientes de esa forma, desahogarte o no escribir. Tú decides qué quieres registrar.</p>
              </div>
            </div>

            <div className="card">
              <img src={require("../assets/emocion-foto.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Registra tus emociones</h3>
                <p className="card-text">
                  Con EunoiaMind puedes registrar fácilmente las emociones que has estado sintiendo durante el día. Puedes escoger entre seis emociones principales o agregar una emoción personalizada.
                </p>
              </div>
            </div>

            <div className="card">
              <img src={require("../assets/calendario-foto.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Seguimiento de tus emociones</h3>
                <p className="card-text">
                  Lleva fácilmente el seguimiento de tus emociones semanales, mensuales o anuales con el calendario. Puedes revisar tus registros de emociones en cualquier momento.
                </p>
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