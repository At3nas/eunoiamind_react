import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const userTemple = [
  {
    nombreEmocion: '',
    descripcion: '',
    tipo: ''
  }
]

function ModalNewEmotionComponent({ createUser }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newEmotion, setNewEmotion] = useState(userTemple);
  const { nombreEmocion, descripcion, tipo} = newEmotion;

  const handleSubmit = (e) => {
    e.preventDefault();//Esto es para evitar que la pagina se actualize al presionar el button
    createUser(newEmotion);
  }

  const handleInputChange = (e) => {
    //...autoNuevo-> es una condicional para que el contenido de autoNuevo se mantenga
    setNewEmotion({ ...newEmotion, [e.target.name]: e.target.value })//Aqui el event.target.name toma el name de cada input para añadirle datos
  }

    return (
        <>
        <div className="btnRegistro" onClick={handleShow}>
            <Button><i class="bi bi-plus-lg" variant="success" onClick={handleShow}>Agrear emocion</i></Button>
        </div>
            <Modal show={show} onHide={handleClose} >
            <Modal.Body className="form_registro">
        <div className="sumbitRegistro">
                    <form onSubmit={handleSubmit}>
                    <h2>¡Genial, nueva emocion!</h2>
                        <div className='form-group _input'>
                            <label for="nombreEmocion" className="form-label--nombreUsu">Nombre de emocion:</label>
                            <input type='text' className='form-control input_registro' id='nombreEmocion' value={nombreEmocion} name='nombreEmocion' onChange={handleInputChange} />
                        </div>
                        <div className='form-group _input'>
                            <label for="tipo" className="form-label--Correo">Tipo:</label>
                            <input type='text' className='form-control input_registro' id='tipo'  value={tipo} name='tipo' onChange={handleInputChange} />
                        </div>
                        <div className='form-group _input'>
                            <label for="descripcion" className="form-label" >Descripcion:</label>
                                <input type='text' className='form-control input_registro' id='descripcion' value={descripcion} name='descripcion' onChange={handleInputChange} />
                        </div>
                        <button type='submit' onClick={handleClose} className='btn btn_submit'>Agregar</button>
                    
                    </form>
                </div>
                    </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalNewEmotionComponent;