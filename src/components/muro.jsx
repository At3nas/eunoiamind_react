import React from 'react';
import '../styles/sass/styles.scss';


const Muro = () => {
    return (
<div>
        <div className="planta2">
        <img src="../src/assets/plant-hanging1.png" alt="planta1" className="planta"/>
    </div>

    <div className="Principal">
        Quieres contarnos por que?
    </div>
    <div>
        <textarea className="text" placeholder="Escribe aqui lo que quieras"></textarea>
        <div className="manchitaMuro2">
        <img src="../src/assets/logo-manchita.png" alt="" className="manchitaMuro">
    </div>    
    </div>

    <div className="buttons">
        <button className="buttons1 buttons3">Omitir</button>
        <button className="buttons2 buttons3">Guardar</button>
    </div>
</div>
                

                );
};


                export default Muro;