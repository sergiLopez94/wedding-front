import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LaBoda from './pages/LaBoda';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/laboda" element={<LaBoda />} />
      </Routes>
    </Router>
  );
}

export default App;

