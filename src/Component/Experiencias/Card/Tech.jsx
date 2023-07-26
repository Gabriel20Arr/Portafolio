import React from 'react'

import styles from './Tech.module.css'

import logoReact from "../../../utils/LogosTech/react_original_logo_icon_146374.ico"
import logoJS from "../../../utils/LogosTech/javascript_icon_130900.ico"
import logoHTML from "../../../utils/LogosTech/5352-html5_102567.ico"
import logoCss from "../../../utils/LogosTech/CSS3_icon-icons.com_67069.ico"
import logoRedux from "../../../utils/LogosTech/redux_original_logo_icon_146365.ico"
import logoExpress from "../../../utils/LogosTech/express_original_wordmark_logo_icon_146528.ico"
import logoMongoDB from "../../../utils/LogosTech/mongodb_original_logo_icon_146424.ico"
import logoPostgreSQL from "../../../utils/LogosTech/postgresql_original_logo_icon_146391.ico"
import logoNPM from "../../../utils/LogosTech/npm_original_wordmark_logo_icon_146402.ico"
import logoBoostrap from "../../../utils/LogosTech/bootstrap_plain_logo_icon_146619.ico"
import logoTrello from "../../../utils/LogosTech/trello_logo_icon_189227.ico"
import logoNode from "../../../utils/LogosTech/file_type_node_icon_130301.ico"
import logoGitHab from "../../../utils/LogosTech/github (1).png"

function Tech() {
  return (
    <div className={styles.contenedorCard}>
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
  )
}

export default Tech;