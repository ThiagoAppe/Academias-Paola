import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarWithSearch } from './components/Interactivity/navbar';
import Home from './pages/home';
import Productos from './pages/productos';
import Contacto from './pages/contacto';

function App() {
  return (
    <Router>
      <NavbarWithSearch />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Academias-Paola" element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
