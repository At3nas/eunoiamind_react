import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Bienvenida from './components/bienvenida';
import Muro from './components/muro';
import Home from './components/home';
import Calendario from './components/calendario';
import Pregunta from './components/pregunta';
import Configuraciones from './components/configuraciones';

import './styles/css/App.css';
import './styles/sass/styles.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/bienvenida" element={<Bienvenida />} />

          <Route path="/pregunta" element={<Pregunta />} />

          <Route path="/muro" element={<Muro />} />

          <Route path="/home" element={<Home />} />

          <Route path="/calendario" element={<Calendario />} />

          <Route path="/configuracion" element={<Configuraciones />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
