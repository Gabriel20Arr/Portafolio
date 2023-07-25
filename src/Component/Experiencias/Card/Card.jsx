import React from 'react'

import styles from './Card.module.css'

import { data } from '../data';

function Card() {
  return (
    <div className={styles.contenedorCard}>
      {
        data.map((el, index) => (
          <div key={index} className={styles.contenedorCard2}>
              <h1>MarketX</h1>
              
              <h2>sobreMarketX</h2>
              <span>{el.sobreMarketX}</span>
              
              <h2>Rol</h2>
              <span>{el.rol}</span>
              
              <h2>Tecnologias</h2>
              <span>{el.tecnologias}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Card;