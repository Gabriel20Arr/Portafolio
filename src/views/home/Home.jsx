import React from 'react'

import Footer from '../../Component/Footer/Footer'
import SobreMi1 from '../../Component/SobreMiH/SobreMi1'
import Imagen from '../../Component/Imagen/Imagen'
import SobreMi from '../../Component/SobreMi/SobreMi'
import Contact from '../../Component/Contact/Contact'

import styles from './home.module.css'

import Nav from '../nav/Nav'
import Proyectos from '../../Component/Proyectos/Proyectos'
import Experiencias from '../../Component/Experiencias/Experiencias'


function Home() {
  return (
    <div className={styles.contonedor}>
      <header>
        <Nav />
      </header>

      <div className={styles.contenedorHome0}>
        <div className={styles.contenedorHome}>
        
          <div className={styles.HQ1}>
            <SobreMi1 />
          </div>
  
          <div className={styles.HQ2}>
            <Imagen />        
          </div>
  
        </div>
      </div>

      <SobreMi />
      <Proyectos />
      <Experiencias />
      <Contact />

      <footer className={styles.PieDePagina}> 
        <Footer />
      </footer>
    </div>
  )
}

export default Home;