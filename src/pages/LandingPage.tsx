import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import fotosergi from '../assets/images/sergi_peque.jpeg';
import fotopaula from '../assets/images/paula_peque1.jpeg';



const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEnter = async () => {
    const isPasswdValid = await checkPassword();
    if (isPasswdValid) {    
      navigate('/laboda');
    } else {
      setError('Constrasenya incorrecta');
    }
  };

  const checkPassword = async () => {
      if(password.trim() === '' || !password){
        setError('Contrasenya buida');
        return false;
      }
      try {
      const response = await fetch('/api/checkPasswd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      if(response.status === 200){
        return true;
      }
      else{
        return false;
      }
    } catch (err) {
      console.error('Error submitting password:', err);
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