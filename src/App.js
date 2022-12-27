import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Welcome from './components/welcome';
import Registro from './components/registro';
import Muro from './components/muro';
import Configuraciones from './components/configuraciones';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
