import React from 'react';
// import logoH from '../../utils/Gabriel.jpg'

import './styles.css';

function Nav() {

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (    
    <div>
      <nav className="navbar">
        <span className="gabriel" > &lt; Gabriel Arroyo /&gt; </span>

        <ul className="nav-links">
          <li className="nav-item">
            <button onClick={() => handleScroll('home')}>Inicio</button>
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
