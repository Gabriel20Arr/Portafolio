import React from 'react'
import { Link } from 'react-router-dom'


import linkedinLogo from "../../utils/linkedin.png";
import githubLogo from "../../utils/github-mark-white.png";
import instagramLogo from "../../utils/instagram.png";
// import whatsappLogo from "../../utils/whatsapp.png";

import styles from './SobreMi1.module.css'

function SobreMi1() {
  return (
    <div id='home' className={styles.SobreMiHome}>
      <div className={styles.textoH}>

        <span className={styles.SobreMiHome2}>
          <span className={styles.span1}>
            Hola! 
            Soy Gabriel Arroyo
          </span>
          <span className={styles.span2}>
            <b> Full Stack Developer </b>
          </span>
        </span>

        <div className={styles.logoss}>
          <span className={styles.logos}>
            <Link to="https://www.linkedin.com/in/2002-gabriel-arroyo/" target="_blank">
              <img src={linkedinLogo} alt="LinkedIn" style={{ width: "18px" }} />
            </Link>
          </span>

          <span className={styles.logos}>
            <Link to="https://github.com/Gabriel20Arr" target="_blank">
              <img src={githubLogo} alt="GitHub" style={{ width: "18px" }} />
            </Link>
          </span>

          {/* <span className={styles.logos}>
            <Link to="https://w.app/qGrVHj" target="_blank">
              <img src={whatsappLogo} alt="WhatsApp" style={{ width: "19px" }} />
            </Link>
          </span> */}

          <span className={styles.logos}>
            <Link to="https://www.instagram.com/" target="_blank">
              <img src={instagramLogo} alt="Instagram" style={{ width: "18px" }} />
            </Link>
          </span>

        </div>
      </div>

        <a 
          href='/Gabriel-Arroyo.pdf' 
          download={'CV-Gabriel'} 
          className={styles.btnpdf}
          style={{textDecoration:'none'}}
        > 
          Descargar CV 
        </a>

    </div>
  )
}

export default SobreMi1;