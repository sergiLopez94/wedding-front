import React from "react";
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h1 className='header-section'>dubtes?</h1>
      <p>Ens pots contactar si tens qualsevol pregunta!</p>
      <div className='contact-details'>
        <div className='details-paula'>
          <p>Resposta ràpida: </p>
          <p className='name'><b>Paula</b></p>
          <p>+49 15128707726</p>
        </div>
        <div className='details-sergi'>
          <p>Resposta amb (possible) delay: </p>
          <p className='name'><b>Sergi</b></p>
          <p>+34 670 20 78 95</p>
        </div>
        <div>
          <img
            className='gif-risa'
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnV0OXZpNWg4ZXU5eW8yOGJyY2V1b3dkajV6OHV2eTh1enUxd2JoOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/12PIT4DOj6Tgek/giphy.gif"
            alt="risa"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
