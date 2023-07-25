import React from 'react'

import ImageHome from "../../utils/logoHome.avif"
// import ImageHome from "../../utils/Gabriel.jpg"

import styles from './Imagen.module.css'


function Imagen() {
  return (
    <div className={styles.ImageHome}>
        <img className={styles.Imagen} src={ImageHome} alt={'ImageHome'} />
    </div>
  )
}

export default Imagen;