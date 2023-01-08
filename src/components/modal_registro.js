import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const userTemple = [
    {
        nombreUsuario: '',
        correo: '',
        contraseña: '',
        contraseña2: ''
    }
]

function ModalFormComponent({ createUser }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newUser, setNewUser] = useState(userTemple);
    const { nombreUsuario, correo, contraseña, contraseña2 } = newUser;

    const handleSubmit = (e) => {
        e.preventDefault();//Esto es para evitar que la pagina se actualize al presionar el button
        createUser(newUser);
    }

    const handleInputChange = (e) => {
        //...autoNuevo-> es una condicional para que el contenido de autoNuevo se mantenga
        setNewUser({ ...newUser, [e.target.name]: e.target.value })//Aqui el event.target.name toma el name de cada input para añadirle datos
    }


    return (
        <>
        <div className="btnRegistro">
            <Button><i class="bi bi-plus-lg" variant="success" onClick={handleShow}>Registrarse</i></Button>
</div>
            <Modal show={show} onHide={handleClose} >
            <Modal.Body className="form_registro">
         <div className="sumbitRegistro">
                    <form onSubmit={handleSubmit}>
                        
                    <h2>¡CREA TU CUENTA!</h2>
                        <div className='form-group _input'>
                            <label for="nombre" className="form-label">Nombre de usuario:</label>
                            <input type='text' className='form-control input_registro' id='nombre' value={nombreUsuario} name='nombreUsuario' onChange={handleInputChange} />
                        </div>
                        <div className='form-group _input'>
                            <label for="correo" className="form-label">Correo</label>
                            <input type='text' className='form-control input_registro' id='correo'  value={correo} name='correo' onChange={handleInputChange} />
                        </div>
                        <br />
                        <div className='form-group _input'>
                            <label for="contraseña" className="form-label" >Contraseña</label>
                                <input type='password' className='form-control input_registro' id='contraseña' placeholder='Contraseña' value={contraseña} name='contraseña' onChange={handleInputChange} />
                        </div>
                        <div className='form-group _input'>
                            <label for="contraseña2">Confirme contraseña</label>
                                <input type='password' className='form-control input_registro' id='contraseña2' placeholder='Confirma tu contraseña' value={contraseña2} name='contraseña2' onChange={handleInputChange} />
                        </div>
                        <button type='submit' onClick={handleClose} className='btn btn_submit'>Aceptar</button>
                      
                    </form>
                </div>
                    </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalFormComponent;


