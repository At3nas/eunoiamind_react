//consumir API
//axios - libreria encargada de hacer peticiones
import axios from 'axios';

//establecer la ruta por deafult
const rutaBase= "http://localhost:9085/";

//funcion de llamado
const guardarUsuario=async()=>{
    const respuesta = await axios.get(rutaBase+"/guardar/usuario");
    console.log(respuesta.data)
    return respuesta.data;
}

export {guardarUsuario};