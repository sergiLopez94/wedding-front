import React from 'react';
import './Nosaltres.css';
import Header from '../components/Header'; 
import fotomaton from '../assets/images/fotomaton.png';
import foto2018 from '../assets/images/2018.jpeg';
import foto2019 from '../assets/images/2019.jpeg';
import foto2020 from '../assets/images/2020.jpeg';
import foto2021 from '../assets/images/2021.jpeg';
import foto2022 from '../assets/images/2022.jpeg';
import foto2023 from '../assets/images/2023.jpeg';
import foto2025 from '../assets/images/2025.jpeg';
import foto2026 from '../assets/images/2026.jpeg';
import foto2024 from '../assets/images/pedida.png';
import TimelineItem from "../components/TimelineItem";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop'; 


const events = [
    {
      year: "2018",
      title: "El dels inicis",
      text: "Ens vam conèixer un Nadal a Sant Cugat <3 Entre el Kistu, la Masella i el Police, la nostra història d'amor va començar.",
      image: foto2018,
    },
    {
      year: "2019",
      title: "El de la distància",
      text: "El Sergi vivia a Madrid i la Paula a Barcelona. Ens vam tornar habituals del pont aeri i del Ave. La distància no ens va frenar.",
      image: foto2019,
    },
    {
      year: "2020",
      title: "El de marxar a Alemanya",
      text: "Any de COVID i de canvis. El Sergi marxa a Alemanya i la Paula segueix a Barcelona. No podíem viatjar ni veure'ns :( Finalment, la Paula es muda també a Alemanya, però a Mainz! Així que seguim a distància...",
      image: foto2020,
    },
    {
      year: "2021",
      title: "El de mudar-nos a viure junts",
      text: "I per fi ens mudem a viure junts a Friedrichshafen! Allà coneixem a la nostra família fora de casa: el Paralelo",
      image: foto2021,
    },
    {
      year: "2022",
      title: "El de descobrir Alemanya junts",
      text: "2022 és l'any de descobrir Alemanya junts. Viatges d'esquí amb amics, pujar muntanyes, escapades de cap de setmana...",
      image: foto2022,
    },
    {
      year: "2023",
      title: "En el que ens enamorem de Japó",
      text: "El 2023 continuem descobrint Alemanya i com no, viatjant i esquiant! Especial menció al viatge inoblidable al Japó amb l'Ari, el Genís i el Russo.",
      image: foto2023,
    },
    {
      year: "2024",
      title: "El que ens vam prometre",
      text: "I un desembre de 2024 amb els Alps francesos com a escenari perfecte, ens prometem! Tenim la sort de comptar amb el nostre portador del anell particular, gràcies Deulo! I els nostres champagne showers, Carlos, Vall, Carmen i equipazo Valthorens <3",
      image: foto2024,
    },
    {
      year: "2025",
      title: "El que planifiquem una boda",
      text: "Algú ens podria haver avisat de lo complicat que és organitzar una boda estant fora... pero se puede! Estem desitjant que arribi el dia i compartir amb vosaltres. ",
      image: foto2025,
    },
    {
      year: "2026",
      title: "El que ens casem!",
      text: "I per fi arriba el dia! Hem mencionat a alguns de vosaltres, però realment tots formeu part de la nostra història i per això ens fa tanta il·lusió compartir aquest capítol amb tota la gent que estimem. <3",
      image: foto2026,
    },
  ];

const Nosaltres: React.FC = () => {
    return(
    
        <div className="nosaltres-page">
            <Header />
            <main>

            <img className='image-fotomaton' src={fotomaton}></img>

            <h1 className='header-section-nosaltres'>la nostra<br/> história</h1> 

            <div className="timeline-container">
            {events.map((ev, i) => (
            <TimelineItem
                key={i}
                year={ev.year}
                title={ev.title}
                text={ev.text}
                image={ev.image}
                position={i % 2 === 0 ? "left" : "right"}
            />
            ))}
      </div>

    
            </main>

            <Footer />
            <BackToTop/>
        </div>
    
        );
    };
    
    
    export default Nosaltres;