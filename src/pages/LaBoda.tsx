import React from 'react';
import './LaBoda.css';
import Header from '../components/Header'; 
import fotomaton from '../assets/images/fotomaton.png';
import timelineboda from '../assets/images/timeline-boda.png';

const LaBoda: React.FC = () => {
  return (
    <div className="la-boda-page">
      <Header />
      <main>
        <img className='image-fotomaton' src={fotomaton}></img>

        <div className='header-description'>
          <h1 className='header-section'>la<br />boda</h1>
          <h3 className="description-section">
          23 de Maig 2026<br />hora: 13h
          </h3>
        </div>

        <img className='image-timelineboda' src={timelineboda}></img>

      </main>
    </div>
  );
};


export default LaBoda;
