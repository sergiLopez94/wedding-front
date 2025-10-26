import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header-container">
  {/* Desktop */}
  <button className="btn-language desktop-only">CAT/ES</button>
  <button className="header-text desktop-only">galeria</button>
  <h2 className="header-title">Paula &<br />Sergi</h2>
  <button className="header-text desktop-only">la boda</button>
  <button className="btn-rsvp desktop-only">RSVP</button>

  {/* Mobile */}
  <button className="hamburger-menu mobile-only" onClick={toggleMenu}>☰</button>
  {menuOpen && (
    <nav className="mobile-menu mobile-only">
      <button className="btn-language">CAT/ES</button>
      <button className="header-text">galeria</button>
      <button className="header-text">la boda</button>
      <button className="btn-rsvp">RSVP</button>
    </nav>
  )}
</header>

  );
};

export default Header;





