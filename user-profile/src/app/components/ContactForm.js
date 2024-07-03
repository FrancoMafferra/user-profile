"use client";

import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1000);
  };

  return (
    <div className={styles.formContainer}>
      {showSuccessMessage && (
        <div className={styles.successMessage}>
          Envío realizado con éxito
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <h2>Formulario de Contacto</h2>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
