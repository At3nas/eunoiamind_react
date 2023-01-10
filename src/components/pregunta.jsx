import React from 'react';
import '../styles/sass/styles.scss';
import Emociones from './emociones';
import { Link } from 'react-router-dom';

const Pregunta = () => { 
    return(
      <div class="container-fluid div__pregunta">
      <div>
        <h1 class="titulo">¿Como te sientes hoy?</h1>
      </div>
  
      <div class="div__pregunta__emociones">
          <img src={require("../assets/felicidad.png")} class="emocion" alt=''/>
          <img src={require("../assets/miedo.png")} class="emocion" alt='' />
          <img src={require("../assets/enojo.png")} class="emocion" alt='' />
          <img src={require("../assets/disgusto.png")} class="emocion" alt='' />
          <img src={require("../assets/sorpresa.png")} class="emocion" alt=''/>
          <img src={require("../assets/tristeza.png")} class="emocion" alt='' />
      </div>
      <div>
      <Emociones/>
      </div>
      <div class="_mancha">
        <img class="mancha" src={require("../assets/logo-manchita.png")} alt=''/>
      </div>
  
      <div class="_btn">
        <Link to={"/home"}><button type="button" class="btn2">Enviar</button></Link>
      </div>
    </div>

    );
  }

export default Pregunta;