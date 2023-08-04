import React, { useState } from 'react';

import './styles.css';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Ocultar el menú después de hacer clic en un enlace
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="navbar">
        <span className="gabriel" onClick={() => handleScroll('home')}>
          &lt; Gabriel Arroyo /&gt;
        </span>

        {/* Botón para desplegar el menú */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={showMenu ? 'menu-line line1' : 'menu-line'}></div>
          <div className={showMenu ? 'menu-line line2' : 'menu-line'}></div>
          <div className={showMenu ? 'menu-line line3' : 'menu-line'}></div>
        </div>

        {/* Menú de navegación */}
        <ul className={showMenu ? 'nav-links show' : 'nav-links'}>
          <li className="nav-item">
            <button className="nav-item2" onClick={() => handleScroll('home')}>
              Inicio
            </button>
          </li>

          <li className="nav-item">
            <button onClick={() => handleScroll('sobre-mi')}>Sobre Mi</button>
          </li>

          <li className="nav-item">
            <button onClick={() => handleScroll('proyectos')}>Proyectos</button>
          </li>

          <li className="nav-item">
            <button onClick={() => handleScroll('exp')}>Experiencias</button>
          </li>

          {/* <li className="nav-item">
            <button onClick={() => handleScroll('skill')}>Habilidades</button>
          </li> */}

          <li className="nav-item">
            <button onClick={() => handleScroll('contacto')}>Contacto</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
