import React from 'react';
import Sidebar from '../components/sidebar';
import { Link } from 'react-router-dom';
import '../styles/sass/styles.scss';

const Home = () => {
  return (
    <div className="container-fluid">
      <Sidebar />
      <div className="div__home">
        <br />
        <div className="div__home__msg">
          <div className="div__home__msg__txt">
            <h2 className="div__home__msg__title">¡Hola, usuario!</h2>
            <h3 className="div__home__msg__subtitle">¿Cómo te sientes?</h3>
            <Link to="/pregunta">
            <button type="button" className="div__home__msg__btn">Registrar emoción</button></Link>
          </div>
          <div className="div__home__msg__img">
            <img src={require("../assets/logo-manchita.png")} className="manchita__home" alt="" />
          </div>
        </div>
        <div className="div__home__week center-element">
          <div className="div__home__week__days center-element">
            <p className="div__home__week__days__p">L</p>
            <p className="div__home__week__days__p">M</p>
            <p className="div__home__week__days__p">M</p>
            <p className="div__home__week__days__p">J</p>
            <p className="div__home__week__days__p">V</p>
            <p className="div__home__week__days__p">S</p>
            <p className="div__home__week__days__p">D</p>
          </div>

          <div className="div__home__week__emo center-element">
            <p className="div__home__week__emo__p">1</p>
            <p className="div__home__week__emo__p">2</p>
            <p className="div__home__week__emo__p">3</p>
            <p className="div__home__week__emo__p">4</p>
            <p className="div__home__week__emo__p">5</p>
            <p className="div__home__week__emo__p">6</p>
            <p className="div__home__week__emo__p">7</p>
          </div>
        </div>
        <div className="div__home__bottom">
          <img src={require("../assets/plant-1.png")} className="plant__home" alt="Planta decorativa" />

          <div className="div__home__bottom__muro">
            <h2 className="div__home__msg__title">¡Cuéntanos lo que quieras!</h2>
            <Link to="/muro">
            <button type="button" className="div__home__msg__btn">Escribe aquí</button></Link>
          </div>
        </div>
        {/* <!-- Fin de div__home --> */}
      </div>
    </div>
  );
};

export default Home;