"use client";

import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import ContactForm from './components/ContactForm';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Header />
      <About />
      <Interests />
      <h2 onClick={handleToggleForm} style={{ cursor: 'pointer' }}>Formulario de contacto</h2>
      {showForm && <ContactForm />}
    </div>
  );
};

export default Home;
