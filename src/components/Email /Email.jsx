import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Email.module.css'


export const Email = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w1utstn', 'template_5tk4nrz', form.current, 'n4CftxWHA_YTZSGZP')
        .then((result) => {
            console.log(result.text);
            console.log('message sent')
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <label>NAME:</label>
            <input type="text" name="user_name" />
            <label>EMAIL:</label>
            <input type="email" name="user_email" />
            <label>MESSAGE:</label>
            <textarea name="message" />
            <input type="submit" value="SEND" />
        </form>
    </div>
  )
}
