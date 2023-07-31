import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from "./Contact.module.css";

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export default function SobreMi() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Obtener los valores de los campos del formulario
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    // Realizar validaciones
    if (!name || !email || !message) {
      Swal.fire({
        title: 'Alerta!',
        text: 'Completar todos los campos',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
      return;
    }

    // Validar el formato del correo electrónico usando una expresión regular simple
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
            title: 'Alerta!',
            text: 'Por favor, ingresa un correo electrónico válido',
            icon: 'warning',
            position: 'center',
            confirmButtonText: 'Ok'
          })
      return;
    }

    // Si todas las validaciones pasan, enviar el formulario
    emailjs
      .sendForm('service_uxam568', 'template_b0jujif', form.current, '1LZEauZPTMLf39Fyv')
      .then(
        (result) => {
          console.log(result.text);
          
          Swal.fire({
            title: 'Exito',
            text: 'Enviado con exito',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id='contacto' className={styles.contact}>
        <div className={styles.contact1}>
          <h1 className={styles.TittleContacto}>Contacto</h1>

          <form className={styles.contact2} ref={form} onSubmit={sendEmail}>
            <label className={styles.Labels}>Nombre</label>
            <input type="text" name="user_name"  placeholder='nombre'/>

            <label className={styles.Labels}>Email</label>
            <input type="email" name="user_email" placeholder='email'/>
            
            <label className={styles.Labels}>Mensaje</label>
            <textarea name="message" placeholder='mensaje'/> 

            <button type="submit" value="Send" className={styles.btn}>Enviar</button>
          </form>
        </div>
    </div>
  );
}
