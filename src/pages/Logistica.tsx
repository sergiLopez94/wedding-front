import React from 'react';
import './Logistica.css';
import Header from '../components/Header'; 
import fotomaton from '../assets/images/fotomaton.png';
import taxi from '../assets/images/taxi.svg';
import bus from '../assets/images/bus.svg';


const Logistica: React.FC = () => {
return(

    <div className="logistica-page">
        <Header />
        <main>

        <img className='image-fotomaton' src={fotomaton}></img>

        <div className='transport-section'> {/* TRANSPORT SECTION */}
          <h1 className='header-section'>transport</h1>   
          <div className='bus-taxi'>
            <div className='bus'>
                <img className='bus-icon' src={bus}></img>
                <h3 className='header-bus'>bus</h3>
                <p>Hi haurà un bus disponible per anar i tornar del centre de Girona al lloc de la boda<br /><br />
                Més informació i horaris aviat</p>
            </div>  

            <div className='taxi'>
            <img className='taxi-icon' src={taxi}></img>
                <h3 className='header-taxi'>taxi</h3>
                <p>La Masia està a 10 minuts de Girona aixi que tambè es podeu trucar taxis<br /><br />
                teléfon GiTaxi: 972 222 323</p>
            </div> 
          </div>
        </div>

        <div className='hotels-section'> {/* HOTELS SECTION */}
          <h1 className='header-section'>hotels</h1>      
        </div>


        </main>
    </div>

    );
};


export default Logistica;
