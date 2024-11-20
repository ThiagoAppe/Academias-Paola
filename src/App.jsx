import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { NavbarWithSearch } from './components/navbar';
import Home from './pages/home';
import Productos from './pages/productos';
import Contacto from './pages/contacto';

function App() {
  return (<>
    <main className=' bg-gray-100'>
      <Router>
        <div className='pt-3'>
          <NavbarWithSearch />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </Router>

    </main>
  </>

  );
}

export default App;
