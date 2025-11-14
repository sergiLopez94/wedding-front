import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LaBoda.css';
import Header from '../components/Header'; 
import fotomaton from '../assets/images/fotomaton.png';
import timelineboda from '../assets/images/timeline-boda.png';
import collage_grande from '../assets/images/collage_grande.png';
import pedida from '../assets/images/pedida.png';

const LaBoda: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="la-boda-page">
      <Header />
      <main>

        <img className='image-fotomaton' src={fotomaton}></img>

        <div className='header-description'> {/* DETALLS BODA SECTION */}
          <h1 className='header-section'>la<br />boda</h1>
          <h3 className="description-section">
          23 de Maig 2026<br />hora: 13h
          </h3>
        </div>
        <img className='image-timelineboda' src={timelineboda}></img>
        <div className='adress-link'>
          <p>Lloc: Finca Mas Batlle</p>
          <a href="https://www.google.com/maps/place/Finca+Mas+Batlle/@41.9637023,2.8452784,17z/data=!3m1!4b1!4m6!3m5!1s0x12bae707deb4fc2b:0x87b8018433078450!8m2!3d41.9637023!4d2.8452784!16s%2Fg%2F11l6yfvdqd?hl=es&entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D">Carretera dels Àngels, Km. 0, 2, <br/>17241 La Creueta, Girona</a>
        </div>

        <div className='dresscode-section'> {/* DRESS CODE SECTION */}
          <div className='text-dresscode'>
          <h1 className='header-section'>dress<br />code</h1>
          <p className='dresscode-description'>Us volem veure a tots ben guapos!<br />
            Homes  traje fosc i corbata. <br />
            Dones amb vestit midi o llarg.<br /><br />
            Oviament podeu venir com volgeu! <br /> però us deixem unes fotos d'inspiració :)
            </p>
          </div>  

          <div className='fotos-dresscode'>
            <img className='collage_grande' src={collage_grande}></img>
          </div>                  
        </div>

        <div className='formulari-section'>  {/* FORMULARI SECTION */}
          <h1 className='header-section'>t'apuntes?</h1>
          <p>Per tal de preparar la millor celebració possible necessitem que ens confirmeu assistència <b>com més aviat millor.</b><br/> Aquest enllaç us portarà a un Google Forms on podreu confirmar-nos si veniu:</p>
          <button className="formulari-button" onClick={() => navigate('/laboda')}>
          CONFIRMA ASSISTENCIA
          </button>
          <img className='image-pedida' src={pedida}></img>
        </div>

        <div className='regal-section'>  {/* REGAL SECTION */}
          <h1 className='header-section-regal'>regal</h1>
          <p><b>La vostra presència és el millor regal que podem demanar! </b><br/>
            Però si voleu fer una contribució per la nostra lluna de mel us deixem aquí els detalls:</p>
          <p className='account-details'><b>ES73987214982388838383</b></p>
        </div>

        <div className='dubtes-section'> {/* DUBTES SECTION */}
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
              <p>+49 15128707726</p>
            </div>
            <div>
              <img className='gif-risa' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnV0OXZpNWg4ZXU5eW8yOGJyY2V1b3dkajV6OHV2eTh1enUxd2JoOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/12PIT4DOj6Tgek/giphy.gif"/>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};


export default LaBoda;
