import React from 'react';
import NavbarIndex from './navbarIndex';
import '../styles/sass/styles.scss';


const Registro = () => {

    return (
        <>
            <NavbarIndex />

            <div className="contenedor">
                <form className="form_registro" form action='' method="POST">
                    <h2>¡CREA TU CUENTA!</h2>
                    <div className="mb-3 _input">
                        <label for="nombre" className="form-label">Nombre de usuario:</label>
                        <input type="text" className="form-control input_registro" id="nombre" name="nombre"/>
                    </div>
                    <div className="mb-3 _input">
                        <label for="exampleFormControlInput1" className="form-label">Correo:</label>
                        <input type="email" className="form-control input_registro" id="correo" name="correo"/>
                    </div>
                    <div className="mb-3 _input">
                        <label for="password" className="form-label">Contraseña:</label>
                        <input type="password" className="form-control input_registro" id="password" name="contraseña"/>
                    </div>
                    <div className="mb-3 _input">
                        <label for="password2" className="form-label">Confirme contraseña:</label>
                        <input type="password" className="form-control input_registro" id="password2" name="contraseña2"/>
                    </div>
                    <div className="div_btn">
                        <button className="btn_submit" type="submit">Registrarse</button>
                    </div>
                </form>
            </div>
        </>
    )


}
export default Registro;