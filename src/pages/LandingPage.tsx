import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import fotosergi from '../assets/images/sergi_peque.jpeg';
import fotopaula from '../assets/images/paula_peque1.jpeg';


const LandingPage: React.FC = () => {
  const navigate = useNavigate();

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
        <button className="enter-button" onClick={() => navigate('/laboda')}>
          ENTRA
        </button>
      </div>
    </div>
  );
};

export default LandingPage;