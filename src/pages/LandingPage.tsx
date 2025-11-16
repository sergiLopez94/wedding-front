import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import fotosergi from '../assets/images/sergi_peque.jpeg';
import fotopaula from '../assets/images/paula_peque1.jpeg';


const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEnter = () => {
    if (password === "ps2026") {    
      navigate('/laboda');
    } else {
      setError('ep! contrasenya incorrecta');
    }
  };

  return (
    <div className="landing-container">
      <div className="image-section left">
        <img src={fotosergi}></img>
      </div>

      <div className="image-section right">
        <img src={fotopaula}></img>
      </div>
      <div className="center-content">
      <h2 className="names">
        Paula &<br />Sergi
      </h2>
      <h1 className="title">Ens casem!</h1>

        <input
          type="password"
          className="password-input"
          placeholder="Introdueix la contrasenya"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button className="enter-button" onClick={handleEnter}>
          ENTRA
        </button>

      </div>
    </div>
  );
};

export default LandingPage;