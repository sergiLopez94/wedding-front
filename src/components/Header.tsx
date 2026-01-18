import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Header.css';


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bodaDropdownOpen, setBodaDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleBodaDropdown = () => setBodaDropdownOpen(!bodaDropdownOpen);

  const goToSection = (sectionId: string) => {
    // Navegar a /laboda pasando el id de la sección como estado
    navigate("/laboda", { state: { scrollToId: sectionId } });
    setBodaDropdownOpen(false);
    setMenuOpen(false);
  };

  const translateToSpanish = () => {
    const waitForSelect = setInterval(() => {
      const select: any = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = "es"; // forzar español
        select.dispatchEvent(new Event("change")); // dispara el cambio
        clearInterval(waitForSelect); // ya lo cambió, detenemos el intervalo
      }
    }, 200); // revisa cada 200ms
  };
  
  
  return (
  <header className="header-container">
    {/* Desktop */}
      <button className="header-text" onClick={translateToSpanish}>
      </button>
    <div className="header-text desktop-only boda-dropdown-container">
        <span onClick={toggleBodaDropdown} className="boda-link">
          la boda
        </span>
        {bodaDropdownOpen && (
          <ul className="boda-dropdown">
            <li onClick={() => goToSection("detalls-boda")}>detalls boda</li>
            <li onClick={() => goToSection("el-lloc")}>el lloc</li>
            <li onClick={() => goToSection("dresscode")}>dress code</li>
            <li onClick={() => goToSection("formulari")}>formulari</li>
            <li onClick={() => goToSection("regal")}>regal</li>
            <li onClick={() => goToSection("dubtes")}>dubtes</li>
          </ul>
        )}
      </div>
    <Link to="/nosaltres" className="header-text desktop-only">nosaltres</Link>
    <h2 className="header-title">
        <Link to="/laboda" style={{ color: 'inherit', textDecoration: 'none' }}>
          Paula &<br />Sergi
        </Link>
    </h2>
    <Link to="/logistica" className="header-text desktop-only">logística</Link>
    <Link to="/galeria" className="header-text desktop-only">galeria</Link>
    <Link to="/formulari" className="btn-rsvp desktop-only">RSVP</Link>

    {/* Mobile */}
    <button className="hamburger-menu mobile-only" onClick={toggleMenu}>☰</button>
    {menuOpen && (
      <nav className={`mobile-menu mobile-only ${menuOpen ? 'open' : ''}`}>  
      <button className="btn-language mobile-only" onClick={translateToSpanish}>
      ES
    </button>
      <div className="boda-dropdown-container">
        <span onClick={toggleBodaDropdown} className="boda-link">la boda</span>
        {bodaDropdownOpen && (
          <ul className="boda-dropdown">
            <li onClick={() => goToSection("detalls-boda")}>detalls boda</li>
            <li onClick={() => goToSection("el-lloc")}>el lloc</li>
            <li onClick={() => goToSection("dresscode")}>dress code</li>
            <li onClick={() => goToSection("formulari")}>formulari</li>
            <li onClick={() => goToSection("regal")}>regal</li>
            <li onClick={() => goToSection("dubtes")}>dubtes</li>
          </ul>
        )}
      </div>
    
      <Link to="/nosaltres" className="header-text">nosaltres</Link>
      <Link to="/logistica" className="header-text">logística</Link>
      <Link to="/galeria" className="header-text">galeria</Link>
      <Link to="/formulari" className="btn-rsvp">RSVP</Link>
    </nav>
    )}
    
</header>


  );
};

export default Header;





