import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LaBoda from './pages/LaBoda';
import Logistica from './pages/Logistica';
import Nosaltres from './pages/Nosaltres';
import Formulari from './pages/Formulari';
import Galeria from './pages/Galeria';
import GoogleTranslate from "./components/GoogleTranslate";

function App() {
  return (
    <>
      <GoogleTranslate /> {/* Widget cargado aquí */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/laboda" element={<LaBoda />} />
          <Route path="/logistica" element={<Logistica />} />
          <Route path="/nosaltres" element={<Nosaltres />} />
          <Route path="/formulari" element={<Formulari />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
