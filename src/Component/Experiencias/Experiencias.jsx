import React from 'react';

import Card from './Card/Card';

import styles from "./Experiencias.module.css"

function Experiencias() {
  return (
    <div id='exp' className={styles.contnedorExp}>
    
        <b> Experiencias </b>
        <Card />
    </div>
  )
}

export default Experiencias