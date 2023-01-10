import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Welcome from './components/welcome';
import Registro from './components/registro';
import Muro from './components/muro';
import Configuraciones from './components/configuraciones';
import Home from './components/home';
import Calendario from './components/calendario';
import Pregunta from './components/pregunta';

import './styles/css/App.css';
import './styles/sass/styles.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/muro" element={<Muro />} />
          <Route path="/configuraciones" element={<Configuraciones />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/pregunta" element={<Pregunta />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
