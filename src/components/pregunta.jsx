import React,{Component} from 'react';
import './styles/sass/styles.scss';

class Pregunta extends Component{
   render(){
    return(
      <div class="container-fluid div__pregunta">
      <div>
        <h1 class="titulo">¿como te sientes hoy?</h1>
      </div>
  
      <div class="div__pregunta__emociones">
          <img src={require("../src/assets/felicidad.png")} class="emocion" alt=''/>
          <img src={require("../src/assets/miedo.png")} class="emocion" alt='' />
          <img src={require("../src/assets/enojo.png")} class="emocion" alt='' />
          <img src={require("../src/assets/disgusto.png")} class="emocion" alt='' />
          <img src={require("../src/assets/sorpresa.png")} class="emocion" alt=''/>
          <img src={require("../src/assets/tristeza.png")} class="emocion" alt='' />
        </div>
      
      <div class="_mancha">
        <img class="mancha" src={require("../src/assets/logo-manchita.png")} alt=''/>
      </div>
  
      <div class="_btn">
        <button type="button" class="btn2">Enviar</button>
      </div>
    </div>

    );
   }
}
export default Pregunta;