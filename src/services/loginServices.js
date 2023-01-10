import axios from 'axios';

const rutaBase = "http://localhost:9085/registro";


const loginUser = async (correo, contraseña) => {
    const respuesta = await axios.post(rutaBase +"/login", correo, contraseña);
    return respuesta.data;
}

export {loginUser};