import React from 'react';
import '../styles/sass/styles.scss';
import Emociones from './emociones';
import { Link } from 'react-router-dom';

const Pregunta = () => {
  return (
    <div class="container-fluid div__pregunta">
      <div>
        <h1 class="titulo">¿Cómo te sientes hoy?</h1>
      </div>

      <div class="div__pregunta__emociones">
        <img src={require("../assets/felicidad.png")} class="emocion hvr-bounce-in animacion" alt='' />
        <p className="parrafo-pre parrafo-pre1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias, labore consectetur beatae nemo, tempore facilis eos consequuntur nisi ut quae </p>
        <img src={require("../assets/miedo.png")} class="emocion hvr-bounce-in animacion" alt='' />
        <p className="parrafo-pre parrafo-pre2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias, labore consectetur beatae nemo, tempore facilis eos consequuntur nisi ut quae </p>       
        <img src={require("../assets/enojo.png")} class="emocion hvr-bounce-in animacion" alt='' />
        <p className="parrafo-pre parrafo-pre3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias, labore consectetur beatae nemo, tempore facilis eos consequuntur nisi ut quae </p>
        <img src={require("../assets/disgusto.png")} class="emocion hvr-bounce-in animacion" alt='' />
        <p className="parrafo-pre parrafo-pre4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias, labore consectetur beatae nemo, tempore facilis eos consequuntur nisi ut quae </p>
        <img src={require("../assets/sorpresa.png")} class="emocion hvr-bounce-in animacion" alt='' />
        <p className="parrafo-pre parrafo-pre5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias, labore consectetur beatae nemo, tempore facilis eos consequuntur nisi ut quae </p>
        <img src={require("../assets/tristeza.png")} class="emocion hvr-bounce-in animacion" alt='' />
        <p className="parrafo-pre parrafo-pre6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias, labore consectetur beatae nemo, tempore facilis eos consequuntur nisi ut quae </p>
      </div>
      <div>
        <Emociones />
      </div>
      
        <img class="mancha" src={require("../assets/logo-manchita.png")} alt='' />

      <div class="_btn">
        <Link to={"/home"}><button type="button" class="btn2-pregunta">Enviar</button></Link>
      </div>
    </div>
  );
}

export default Pregunta;