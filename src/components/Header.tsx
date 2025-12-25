import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
  <header className="header-container">
    {/* Desktop */}
    <button className="btn-language desktop-only">CAT/ES</button>
    <Link to="/laboda" className="header-text desktop-only">la boda</Link>
    <Link to="/nosaltres" className="header-text desktop-only">nosaltres</Link>
    <h2 className="header-title">Paula &<br />Sergi</h2>
    <Link to="/logistica" className="header-text desktop-only">logística</Link>
    <Link to="/galeria" className="header-text desktop-only">galeria</Link>
    <Link to="/formulari" className="btn-rsvp desktop-only">RSVP</Link>

    {/* Mobile */}
    <button className="hamburger-menu mobile-only" onClick={toggleMenu}>☰</button>
    {menuOpen && (
      <nav className="mobile-menu mobile-only">
        <button className="btn-language">CAT/ES</button>
        <Link to="/laboda" className="header-text">la boda</Link>
        <Link to="/nosaltres" className="header-text">nosaltres</Link>
        <Link to="/logistica" className="header-text">logística</Link>
        <Link to="/logistica" className="header-text">galeria</Link>
        <Link to="/formulari" className="btn-rsvp">RSVP</Link>
      </nav>
    )}
    
</header>


  );
};

export default Header;





