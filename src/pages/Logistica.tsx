import React from 'react';
import './Logistica.css';
import Header from '../components/Header'; 
import fotomaton from '../assets/images/fotomaton.png';
import taxi from '../assets/images/taxi.svg';
import bus from '../assets/images/bus.svg';
import mapaGirona from '../assets/images/mapa_girona.png';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';


const Logistica: React.FC = () => {
return(

    <div className="logistica-page">
        <Header />
        <main>

        <img className='image-fotomaton' src={fotomaton}></img>

        <div className='transport-section'> {/* TRANSPORT SECTION */}
          <h1 className='header-section-transport'>transport</h1>   
          <p className="description-section-transport">
          Volem que tothom disfruti sense preocupacions!
          </p>
          <div className='bus-taxi'>
            <div className='bus'>
                <img className='bus-icon' src={bus}></img>
                <h3 className='header-bus'>bus</h3>
                <p>Hi haurà un bus disponible per anar i tornar del centre de Girona al lloc de la boda<br /><br />
                  <ul>
                    <li>Parada 1 (12:00h): Casa Rural. <br/> Passeig de la Llibertat, 18, 17150 Sant Gregori, Girona, España</li>
                    <li>Parada 2 (12:15h): Girona Devesa <br/> pg. Devesa - av. de França, Parada P0108, 17007 Girona, España</li>
                    <li>Parada 3 (12:45h): Arribada a la finca <br/> Mas Batlle, 17150 Sant Gregori, Girona, España</li>
                  </ul>
                </p>
                <br/>
                <p>Per la tornada, el bus us estarà esperant a les 23:45h a l'entrada de la finca</p><br/>
            </div>  

            <div className='taxi'>
            <img className='taxi-icon' src={taxi}></img>
                <h3 className='header-taxi'>taxi</h3>
                <p>La Masia està a 10 minuts de Girona així que també podeu trucar taxis<br /><br />
                telèfon GiTaxi: 972 222 323</p>
            </div> 
          </div>
        </div>

        <div className='hotels-section'> {/* HOTELS SECTION */}
          <h1 className='header-section-transport'>hotels</h1>  
          <p className="description-section-transport">
          Si voleu agafar els busos per anar i tornar de la boda us recomanem buscar allotjament pel centre de Girona.
          <br />Podeu buscar al Barri Vell i El Call
          </p>    
          <div className='mapa-hotels'>
            <img className='mapa-girona' src={mapaGirona}></img>
            <div className='hotels-llista'>
              <p>Algunes suggerències:</p>
              <p className='hotel'>Hotel Ciutat de Girona 
              <br />(teniu 5% de descompte utilitzant el codi PAULAISERGI)</p>
              <p className='hotel'>Hotel Ultonia & Hotel Gran Ultonia</p>
              <p className='hotel'>Hotel Carlemany</p>
              <p className='hotel'>Apartments Airbnb o similar</p>
            </div>
          </div>
        </div>


        </main>

        <Footer/>
        <BackToTop/>
    </div>

    );
};


export default Logistica;
