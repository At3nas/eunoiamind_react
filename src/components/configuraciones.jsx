import React from 'react';
import '../styles/sass/styles.scss';
import Sidebar from './sidebar';


const Configuraciones = () => {
    return (

      <div>
        <Sidebar/>
          <div>
            <div className="nametop">
                Configuracion
            </div>
            <br/>
                <h3 className="h3">Avatar:</h3>
                <div className="circulo">
                </div>


                <div className="botones">
                    <button className="botones botonesprin">Cambiar</button>
                    <button className="botones botonesprin">Eliminar</button>
                </div>
                <br /><br /><br />

                <div className="nombreus">
                    Nombre de usuario:
                </div>
                <div className="usua1">
                    <input type="text" className="inputt"/>
                </div>
                <br />
                <div className="nombreus corre">
                    Correo:
                </div>
                <div className="usua1">
                    <input type="text" className="inputt" />
                </div>

                <br />
                <div className="nombreus contra">
                    Contraseña:
                </div>
                <div className="usua1">
                    <input type="text" className="inputt"/>
                </div>
                <br />
                <div className="button1">
                    <button className="button2 button4">Guardar</button>
                    <button className="button2 ">Cancelar</button>
                </div>
                <br/>
                    <br/>
                    </div>
                </div>
                

                );
};


                export default Configuraciones;