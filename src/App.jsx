import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { NavbarWithSearch } from './components/navbar';
import Home from './pages/home';
import Productos from './pages/productos';
import Contacto from './pages/contacto';

function App() {
  return (
    <Router>
      <NavbarWithSearch />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
