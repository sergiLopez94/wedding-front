import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Galeria.css';
import fotomaton from '../assets/images/fotomaton.png';

const Galeria: React.FC = () => {
  return (
    <div className="galeria-page">
      <Header />
      <main className="galeria-content">
      <img className='image-fotomaton' src={fotomaton}></img>
        <h1>coming soon…</h1>
      </main>
      <Footer/>
    </div>
  );
};

export default Galeria;
