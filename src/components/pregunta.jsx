import React from 'react';
import '../styles/sass/styles.scss';
import ModalNewEmotionComponent from './modal_agregarEmocion';
import { Link } from 'react-router-dom';


const Pregunta = () => {

  function seleccionar(emo) {
    let emo1 = document.getElementById("emo1")
    let emo2 = document.getElementById("emo2")
    let emo3 = document.getElementById("emo3")
    let emo4 = document.getElementById("emo4")
    let emo5 = document.getElementById("emo5")
    let emo6 = document.getElementById("emo6")
    let emoSelected = document.getElementById(emo)

    let emoArr = [emo1,emo2,emo3,emo4,emo5,emo6]
    for (let emo of emoArr){
      if(emo != null && emo !== undefined){
        emo.classList.remove("selected")
      }
    }
    if(emoSelected != null && emoSelected !== undefined){
      emoSelected.classList.add("selected")
    }
    console.log(emo);
  };

  return (
    <div className="container-fluid div__pregunta">
      <div>
        <h1 className="titulo">¿Cómo te sientes hoy?</h1>
      </div>

      <div className="div__pregunta__emociones">
        <div className="contenedor_emocion">
          <img src={require("../assets/felicidad.png")} onClick={() => seleccionar('emo1')} className="emocion hvr-bounce-in animacion" id='emo1' alt='' />
          <p className="parrafo-pre descripcion_emocion">Felicidad</p>
        </div>
        <div className="contenedor_emocion">
          <img src={require("../assets/miedo.png")} onClick={() => seleccionar('emo2')} className="emocion hvr-bounce-in animacion" id='emo2' alt='' />
          <p className="parrafo-pre descripcion_emocion">Miedo</p>  
        </div>
        <div className="contenedor_emocion">
          <img src={require("../assets/enojo.png")} onClick={() => seleccionar('emo3')} className="emocion hvr-bounce-in animacion" id='emo3' alt='' />
          <p className="parrafo-pre descripcion_emocion">Enojo</p>
        </div>
        <div className="contenedor_emocion">
          <img src={require("../assets/disgusto.png")} onClick={() => seleccionar('emo4')} className="emocion hvr-bounce-in animacion" id='emo4' alt='' />
          <p className="parrafo-pre descripcion_emocion">Disgusto</p>
        </div>
        <div className="contenedor_emocion">
          <img src={require("../assets/sorpresa.png")} onClick={() => seleccionar('emo5')} className="emocion hvr-bounce-in animacion" id='emo5' alt='' />
          <p className="parrafo-pre descripcion_emocion">Sorprendido</p>
        </div>
        <div className="contenedor_emocion">
          <img src={require("../assets/tristeza.png")} onClick={() => seleccionar('emo6')} className="emocion hvr-bounce-in animacion" id='emo6' alt='' />
          <p className="parrafo-pre descripcion_emocion">Tristeza</p>
        </div>
      </div>
        <img className="mancha" src={require("../assets/logo-manchita.png")} alt='' />

      <div className="_btn">
        <Link to={"/home"}><button type="button" className="btn2-pregunta">Enviar</button></Link>
        <ModalNewEmotionComponent/>
      </div>
      
    </div>
  );

}

export default Pregunta;