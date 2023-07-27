import React from 'react';

import styles from "./Experiencias.module.css"

import logoReact from "../../utils/LogosTech/react_original_logo_icon_146374.ico"
import logoJS from "../../utils/LogosTech/javascript_icon_130900.ico"
import logoHTML from "../../utils/LogosTech/5352-html5_102567.ico"
import logoCss from "../../utils/LogosTech/CSS3_icon-icons.com_67069.ico"
import logoRedux from "../../utils/LogosTech/redux_original_logo_icon_146365.ico"
import logoExpress from "../../utils/LogosTech/express_original_wordmark_logo_icon_146528.ico"
import logoMongoDB from "../../utils/LogosTech/mongodb_original_logo_icon_146424.ico"
import logoPostgreSQL from "../../utils/LogosTech/postgresql_original_logo_icon_146391.ico"
import logoNPM from "../../utils/LogosTech/npm_original_wordmark_logo_icon_146402.ico"
import logoBoostrap from "../../utils/LogosTech/bootstrap_plain_logo_icon_146619.ico"
import logoTrello from "../../utils/LogosTech/trello_logo_icon_189227.ico"
import logoNode from "../../utils/LogosTech/file_type_node_icon_130301.ico"
import logoGitHab from "../../utils/LogosTech/github (1).png"
import logoNext from "../../utils/LogosTech/nextjs_icon_213852.ico"

import marketx from '../../utils/marketX.png'
import marketx2 from '../../utils/marketX2.png'
import Foods from '../../utils/Foods.png'
import menuFoods from '../../utils/menuFoods.png'
import rickandmorty from '../../utils/rickandmorty.png'
import rickandmorty2 from '../../utils/rickandmorty2.png'
import portafolioo from '../../utils/PortafolioTest.png'
import portafolio2 from '../../utils/Portafolio2.png'


function Experiencias() {
  return (
    <div id='exp' className={styles.contnedorExp}>
      <div className={styles.divT}>
        <h2 className={styles.tituloE}> Experiencias </h2>
      </div>    

      {/* Market X */}

      <div className={styles.Card}>
        <div className={styles.imgs}>
          <img src={marketx} alt='' className={styles.img}/>
          <img src={marketx2} alt='' className={styles.img}/>
        </div>
          
        <div className={styles.Text}>
          <div className={styles.contenedorCard0}>
            <h1 className={styles.titulos}>MarketX</h1>
            <p>
              Colaboré con un equipo de 6 personas en el desarrollo de un e-commerce completo desde cero.
              Asumí roles tanto de backend como de frontend, participando en la implementación de sistemas de pago, renderizado de componentes, estilos y en el despliegue exitoso del sitio web.
            </p>

            <div className={styles.contenedorCard}>         
              <span className={styles.nameT}> Tecnologias </span>
              <div className={styles.logosT}>

                <div className={styles.DlogoT}> 
                  <img src={logoNext} className={styles.logoT} alt='next'/>
                  <span className={styles.nombre}>React</span>
                </div>

                <div>
                  <img src={logoJS} className={styles.logoT} alt='JS'/>
                  <span className={styles.nombre}>JavaScript</span>
                </div>

                <div>
                  <img src={logoCss} className={styles.logoT} alt='CSS3' />
                  <span className={styles.nombre}>CSS3</span>
                </div>

                <div>
                  <img src={logoHTML} className={styles.logoT} alt='HTML' />
                  <span className={styles.nombre}>HTML</span>
                </div>

                <div>
                  <img src={logoRedux} className={styles.logoT} alt='Redux'/>
                  <span className={styles.nombre}>Redux</span>
                </div>

                <div>
                  <img src={logoExpress} className={styles.logoT} alt='Express' />
                  <span className={styles.nombre}>Express</span>
                </div>

                <div>
                  <img src={logoNode} className={styles.logoT} alt='Node'/>
                  <span className={styles.nombre}>Node</span>
                </div>

                <div>
                  <img src={logoMongoDB} className={styles.logoT} alt='mongoDB'/>
                  <span className={styles.nombre}>MongoDB</span>
                </div>

                <div>
                  <img src={logoNPM} className={styles.logoT} alt='NPM'/>
                  <span className={styles.nombre}>NPM</span>
                </div>

                <div>
                  <img src={logoBoostrap} className={styles.logoT} alt='BootStrap'/>
                  <span className={styles.nombre}>Bootstrap</span>
                </div>

                <div>
                  <img src={logoTrello} className={styles.logoT} alt='Trello'/>
                  <span className={styles.nombre}>Trello</span>
                </div>

                <div>
                  <img src={logoGitHab} className={styles.logoT} alt='GitHab'/>
                  <span className={styles.nombre}>GitHab</span>
                </div>

              </div>
            </div>   
          </div>
        </div>
      </div>


      {/* Foods */}

      <div className={styles.Card}>
        <div className={styles.imgs}>
          <img src={Foods} alt='' className={styles.img}/>
          <img src={menuFoods} alt='' className={styles.img}/>
        </div>
          
        <div className={styles.Text}>
          <div className={styles.contenedorCard0}>
            <h1 className={styles.titulos}>Foods</h1>
            
            <p >
              Durante mi experiencia en el desarrollo Full Stack, participé en un emocionante proyecto de creación de una aplicación web de recetas de comidas. Este proyecto fue parte de mis estudios y abarcó tanto el frontend como el backend, involucrando diversas tecnologías.

              Mi rol en el proyecto fue el de un desarrollador Full Stack. Participé tanto en la implementación del frontend como en el desarrollo del backend, contribuyendo a la construcción de una interfaz de usuario intuitiva y atractiva, y también a la creación de una API RESTful para manejar las solicitudes del cliente.
            </p>

            <span className={styles.nameT}> Tecnologias </span>
            <div className={styles.logosT}>

                <div className={styles.DlogoT}> 
                  <img src={logoReact} className={styles.logoT} alt='react'/>
                  <span className={styles.nombre}>React</span>
                </div>

                <div>
                  <img src={logoJS} className={styles.logoT} alt='JS'/>
                  <span className={styles.nombre}>JavaScript</span>
                </div>

                <div>
                  <img src={logoCss} className={styles.logoT} alt='CSS3' />
                  <span className={styles.nombre}>CSS3</span>
                </div>

                <div>
                  <img src={logoHTML} className={styles.logoT} alt='HTML' />
                  <span className={styles.nombre}>HTML</span>
                </div>

                <div>
                  <img src={logoRedux} className={styles.logoT} alt='Redux'/>
                  <span className={styles.nombre}>Redux</span>
                </div>

                <div>
                  <img src={logoExpress} className={styles.logoT} alt='Express' />
                  <span className={styles.nombre}>Express</span>
                </div>

                <div>
                  <img src={logoNode} className={styles.logoT} alt='Node'/>
                  <span className={styles.nombre}>Node</span>
                </div>

                <div>
                  <img src={logoPostgreSQL} className={styles.logoT} alt='PostgreSQL'/>
                  <span className={styles.nombre}>PostgreSQL</span>
                </div>

                <div>
                  <img src={logoNPM} className={styles.logoT} alt='NPM'/>
                  <span className={styles.nombre}>NPM</span>
                </div>

                <div>
                  <img src={logoTrello} className={styles.logoT} alt='Trello'/>
                  <span className={styles.nombre}>Trello</span>
                </div>

                <div>
                  <img src={logoGitHab} className={styles.logoT} alt='GitHab'/>
                  <span className={styles.nombre}>GitHab</span>
                </div>

              </div>
          </div>
        </div>
      </div>


      {/* Rick And Morty */}

      <div className={styles.Card}>
        <div className={styles.imgs}>
          <img src={rickandmorty} alt='' className={styles.img}/>
          <img src={rickandmorty2} alt='' className={styles.img}/>
        </div>
          
        <div className={styles.Text}>
          <div className={styles.contenedorCard0}>
            <h1 className={styles.titulos}>Rick And Morty</h1>
            
            <p>
              El proyecto consiste en el desarrollo de una Single Page Application (SPA) que cuenta con varias funcionalidades, incluyendo un buscador para los personajes, filtros, un sistema de inicio de sesión, un menú de navegación y otras características adicionales.
              En este proyecto, desempeñé el rol de desarrollador Full Stack. Mi responsabilidad fue contribuir a la implementación de todas las funcionalidades de la SPA, abarcando tanto el frontend como el backend.
            </p>
            
              <span className={styles.nameT}> Tecnologias </span>
              <div className={styles.logosT}>

                <div className={styles.DlogoT}> 
                  <img src={logoReact} className={styles.logoT} alt='react'/>
                  <span className={styles.nombre}>React</span>
                </div>

                <div>
                  <img src={logoJS} className={styles.logoT} alt='JS'/>
                  <span className={styles.nombre}>JavaScript</span>
                </div>

                <div>
                  <img src={logoCss} className={styles.logoT} alt='CSS3' />
                  <span className={styles.nombre}>CSS3</span>
                </div>

                <div>
                  <img src={logoHTML} className={styles.logoT} alt='HTML' />
                  <span className={styles.nombre}>HTML</span>
                </div>

                <div>
                  <img src={logoRedux} className={styles.logoT} alt='Redux'/>
                  <span className={styles.nombre}>Redux</span>
                </div>

                <div>
                  <img src={logoExpress} className={styles.logoT} alt='Express' />
                  <span className={styles.nombre}>Express</span>
                </div>

                <div>
                  <img src={logoNode} className={styles.logoT} alt='Node'/>
                  <span className={styles.nombre}>Node</span>
                </div>

                <div>
                  <img src={logoPostgreSQL} className={styles.logoT} alt='PostgreSQL'/>
                  <span className={styles.nombre}>PostgreSQL</span>
                </div>

                <div>
                  <img src={logoNPM} className={styles.logoT} alt='NPM'/>
                  <span className={styles.nombre}>NPM</span>
                </div>

                <div>
                  <img src={logoGitHab} className={styles.logoT} alt='GitHab'/>
                  <span className={styles.nombre}>GitHab</span>
                </div>

              </div>
          </div>
        </div>
      </div>


      {/* portafio */}

      <div className={styles.Card}>
        <div className={styles.imgs}>
          <img src={portafolioo} alt='' className={styles.img}/>
          <img src={portafolio2} alt='' className={styles.img}/>
        </div>
          
        <div className={styles.Text}>
          <div className={styles.contenedorCard0}>
            <h1 className={styles.titulos}>Portafolio</h1>
            
            <p>
              El proyecto consiste en la creación de mi portafolio personal como una Single Page Application (SPA). El objetivo principal es mostrar mis habilidades, proyectos anteriores, y experiencias profesionales de una manera atractiva y organizada.

              En este proyecto, asumí el rol de desarrollador Full Stack y también el de diseñador. Fui responsable de la planificación, diseño y desarrollo de la SPA de principio a fin.

              Utilicé tecnologías como HTML, CSS y JavaScript para construir la interfaz de usuario de mi portafolio. Implementé un diseño moderno y receptivo que resalta mis proyectos y habilidades de manera efectiva.
            </p>
            
              <span className={styles.nameT}> Tecnologias </span>
              <div className={styles.logosT}>

                <div className={styles.DlogoT}> 
                  <img src={logoReact} className={styles.logoT} alt='react'/>
                  <span className={styles.nombre}>React</span>
                </div>

                <div>
                  <img src={logoJS} className={styles.logoT} alt='JS'/>
                  <span className={styles.nombre}>JavaScript</span>
                </div>

                <div>
                  <img src={logoCss} className={styles.logoT} alt='CSS3' />
                  <span className={styles.nombre}>CSS3</span>
                </div>

                <div>
                  <img src={logoHTML} className={styles.logoT} alt='HTML' />
                  <span className={styles.nombre}>HTML</span>
                </div>

                <div>
                  <img src={logoRedux} className={styles.logoT} alt='Redux'/>
                  <span className={styles.nombre}>Redux</span>
                </div>

                <div>
                  <img src={logoExpress} className={styles.logoT} alt='Express' />
                  <span className={styles.nombre}>Express</span>
                </div>

                <div>
                  <img src={logoNPM} className={styles.logoT} alt='NPM'/>
                  <span className={styles.nombre}>NPM</span>
                </div>

                <div>
                  <img src={logoBoostrap} className={styles.logoT} alt='BootStrap'/>
                  <span className={styles.nombre}>Bootstrap</span>
                </div>

                <div>
                  <img src={logoTrello} className={styles.logoT} alt='Trello'/>
                  <span className={styles.nombre}>Trello</span>
                </div>

                <div>
                  <img src={logoGitHab} className={styles.logoT} alt='GitHab'/>
                  <span className={styles.nombre}>GitHab</span>
                </div>

              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Experiencias