import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LaBoda from './pages/LaBoda';
import Logistica from './pages/Logistica';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/laboda" element={<LaBoda />} />
        <Route path="/logistica" element={<Logistica />} />
      </Routes>
    </Router>
  );
}

export default App;

