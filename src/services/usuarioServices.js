import axios from 'axios';

//establecer la ruta por deafult
const rutaBase = "http://localhost:9085/usuario";

//funcion de llamado
const  createUser = async (usuario) => {
    const respuesta = await axios.post(rutaBase +"/guardar", usuario);
    return respuesta.data;
}

export {createUser};