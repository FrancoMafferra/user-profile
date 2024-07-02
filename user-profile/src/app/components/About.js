import React, { useEffect, useState } from "react";
import styles from "../styles/About.module.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Mostrar después de 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${styles.about} ${isVisible ? styles.appear : ""}`}>
      <h2>Sobre mí</h2>
      <p>
        Soy un desarrollador front-end con 2.5 años de experiencia en la
        creación de interfaces de usuario modernas y funcionales. A lo largo de
        mi carrera, he trabajado con tecnologías como HTML, CSS, JavaScript y
        React para construir aplicaciones web dinámicas y responsivas. Mi
        objetivo es ofrecer experiencias de usuario intuitivas y atractivas,
        asegurando que cada proyecto sea accesible y fácil de usar. Soy un
        entusiasta de los pitbulls y me encanta pasar tiempo con ellos. Creo
        firmemente en la necesidad de romper estereotipos negativos sobre esta
        maravillosa raza y demostrar que son animales leales, cariñosos y
        llenos de energía. Además de mi trabajo y mis perros, soy padre y
        considero que esta es una de las facetas más importantes y gratificantes
        de mi vida. Ser padre me ha enseñado a ser más paciente, comprensivo y
        organizado, habilidades que también aplico en mi carrera profesional. En
        mi tiempo libre, me gusta desconectarme del trabajo jugando videojuegos.
        Encuentro que los videojuegos son una excelente manera de relajarse y
        también una fuente de inspiración para mi trabajo como desarrollador.
        También soy un apasionado del fútbol. Ya sea jugando un partido con
        amigos o viendo a mi equipo favorito en la televisión, el fútbol es una
        gran parte de mi vida. Me encanta la camaradería, la estrategia y la
        emoción que el deporte trae.
      </p>
    </section>
  );
};

export default About;
