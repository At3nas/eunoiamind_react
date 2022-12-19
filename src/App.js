import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Welcome from './components/welcome';

import './styles/css/App.css';
import './styles/sass/styles.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
