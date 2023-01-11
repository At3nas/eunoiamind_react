/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import { getAllEmocion } from '../services/emocionServices';
import MostrarEmociones from './mostrarEmociones';

const emocionInit = [{
    id : 1,
    nombreEmocion: "",
    descripcion: "",
    subemociones: {}
}]
const emocionComponent = () => {
    const [emociones, setEmociones] = useState(emocionInit);
    const obtenerEmociones = async () => {
        setEmociones(await getAllEmocion());
        console.log(emociones);
    }
useEffect(() => { obtenerEmociones()}, []);

    return(
        <MostrarEmociones objemocion = {emociones}/>
    )

}

export default emocionComponent;