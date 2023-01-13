import axios from 'axios';

const rutaBase = "http://localhost:9085/emociones";

const getAllEmocion = async() => {
    const respuesta = await axios.get(rutaBase + "/obtener");
    console.log(respuesta.data);
    return respuesta.data;
}
export {getAllEmocion}