import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

import linkedinLogo from "../../utils/linkedin.png";
import githubLogo from "../../utils/github-mark-white.png";
import instagramLogo from "../../utils/instagram.png";
import whatsappLogo from "../../utils/whatsapp.png";


function Footer() {
  return (
        <div className={styles.PieDePaginaConts}>
          <span className={styles.logos}>
            <Link to="https://www.linkedin.com/in/2002-gabriel-arroyo/" target="_blank">
              <img src={linkedinLogo} alt="LinkedIn" style={{ width: "25px" }} />
            </Link>
          </span>

          <span className={styles.logos}>
            <Link to="https://github.com/Gabriel20Arr" target="_blank">
              <img src={githubLogo} alt="GitHub" style={{ width: "25px" }} />
            </Link>
          </span>

          <span className={styles.logos}>
            <Link to="https://www.instagram.com/" target="_blank">
              <img src={instagramLogo} alt="Instagram" style={{ width: "25px" }} />
            </Link>
          </span>

          <span className={styles.logos}>
            <Link to="https://w.app/qGrVHj" target="_blank">
              <img src={whatsappLogo} alt="WhatsApp" style={{ width: "25px" }} />
            </Link>
          </span>
        </div>  
  )
}

export default Footer