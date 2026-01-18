import React from 'react';
import './LaBoda.css';
import Header from '../components/Header'; 
import fotomaton from '../assets/images/fotomaton.png';
import timelineboda from '../assets/images/timeline-boda.png';
import collage_grande from '../assets/images/collage_grande.png';
import pedida from '../assets/images/pedida.png';
import girasoles from '../assets/images/girasoles.jpg';
import BackToTop from '../components/BackToTop'; 

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LaBoda: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate(); 

  useEffect(() => {
    if (location.state?.scrollToId) {
      const el = document.getElementById(location.state.scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.state]);

  return (
    <div className="la-boda-page">
      <Header />
      <main>

        <img className='image-fotomaton' src={fotomaton}></img>

        <div id="detalls-boda" className='header-description'> {/* DETALLS BODA SECTION */}
          <h1 className='header-section'>la<br />boda</h1>
          <h3 className="description-section">
          23 de Maig 2026<br />hora: 13h
          </h3>
        </div>
        <img className='image-timelineboda' src={timelineboda}></img>
        <div className='adress-link'>
          <p>
            <span className="highlight">Lloc: Finca Mas Batlle</span>
          </p>
          <a href="https://www.google.com/maps/place/Finca+Mas+Batlle/@41.9637023,2.8452784,17z/data=!3m1!4b1!4m6!3m5!1s0x12bae707deb4fc2b:0x87b8018433078450!8m2!3d41.9637023!4d2.8452784!16s%2Fg%2F11l6yfvdqd?hl=es&entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D">Carretera dels Àngels, Km. 0, 2, <br/>17241 La Creueta, Girona</a>
        </div>

        <div id="el-lloc" className='lloc-section' style={{ 
          backgroundImage: `url(${girasoles})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
            }}
          >
          <h1 className='header-section'>el<br />lloc</h1>
          <p className='lloc-description'>
            vosaltres, nosaltres i d'escenari l'Empordà. 
            No se'ns acudeix un millor lloc per celebrar!
          </p>
        </div>


        <div id="dresscode" className='dresscode-section'> {/* DRESS CODE SECTION */}
          <div className='text-dresscode'>
          <h1 className='header-section'>dress<br />code</h1>
          <p className='dresscode-description'>Us volem veure a tots ben guapos!<br />
            Homes  traje fosc i corbata. <br />
            Dones amb vestit midi o llarg.<br /><br />
            Obviament podeu venir com volgeu! <br /> Tot i així, si necessiteu una mica d'inspiració aquí teniu algunes fotos :)
            </p>
          </div>  

          <div className='fotos-dresscode'>
            <img className='collage_grande' src={collage_grande}></img>
          </div>                  
        </div>

        <div id="formulari" className='formulari-section'>  {/* FORMULARI SECTION */}
          <h1 className='header-section'>t'apuntes?</h1>
          <p>Per tal de preparar la millor celebració possible necessitem que ens confirmeu l'assistència <b>com més aviat millor.</b><br/> Aquest enllaç us portarà a un formulari on podreu confirmar-nos si veniu:</p>
          <button className="formulari-button" 
           onClick={() => {
            navigate('/formulari');
            window.scrollTo(0, 0);
          }}>
          CONFIRMA ASSISTENCIA
          </button>
          <img className='image-pedida' src={pedida}></img>
        </div>

        <div id="regal" className='regal-section'>  {/* REGAL SECTION */}
          <h1 className='header-section-regal'>regal</h1>
          <p><b>La vostra presència és el millor regal que podem demanar! </b><br/>
          Però si voleu fer una contribució, per començar el nostre futur junts, ens ajudarà molt! Us deixem aquí els detalls:</p>
          <p className='account-details'><b>DE54 1001 1001 2397 6800 53</b><br/>BIC: NTSBDEB1XXX</p>
        </div>

        <div id="dubtes" className='dubtes-section'> {/* DUBTES SECTION */}
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
              <img className='gif-risa' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnV0OXZpNWg4ZXU5eW8yOGJyY2V1b3dkajV6OHV2eTh1enUxd2JoOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/12PIT4DOj6Tgek/giphy.gif"/>
            </div>
          </div>
        </div>

      </main>

      <BackToTop/>
    </div>
  );
};


export default LaBoda;
