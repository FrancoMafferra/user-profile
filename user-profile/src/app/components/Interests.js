import React, { useState } from 'react';
import styles from '../styles/Interests.module.css';

const interests = [
  { title: 'Desarrollo Web', description: 'El desarrollo web implica la creación de aplicaciones y sitios web interactivos y funcionales. Utilizando tecnologías como HTML, CSS y JavaScript, los desarrolladores pueden construir interfaces intuitivas y experiencias de usuario fluidas. Este campo es fundamental en la era digital, permitiendo desde simples páginas informativas hasta complejas plataformas de comercio electrónico y aplicaciones web avanzadas. La capacidad de dar vida a ideas y facilitar la interacción digital continua es lo que hace que el desarrollo web sea tan apasionante y relevante en nuestros tiempos.' },
  { title: 'Inteligencia Artificial', description: 'La inteligencia artificial es el motor detrás de las máquinas que aprenden y toman decisiones como los humanos, desde autos que conducen solos hasta asistentes virtuales que responden preguntas. Este campo revoluciona industrias al mejorar la eficiencia y la precisión de las tareas automatizadas, prometiendo un futuro donde la tecnología interactúe cada vez más naturalmente con nosotros. Por esos motivos, este avance me motiva profundamente.' },
  { title: 'Blockchain', description: 'Blockchain es una tecnología revolucionaria que facilita el almacenamiento y la transmisión segura de datos de manera descentralizada. Utiliza criptografía para asegurar la integridad y la transparencia de la información, eliminando la necesidad de intermediarios. Esto promueve la confianza en las transacciones digitales y abre nuevas posibilidades en áreas como las finanzas, la logística y la gestión de identidad. La capacidad de transformar sistemas tradicionales hacia una mayor eficiencia y seguridad es lo que hace que la blockchain sea tan fascinante y prometedora en el panorama tecnológico actual.' },
  { title: 'Música', description: 'El rock es un género musical que siempre me ha emocionado profundamente. Desde sus raíces rebeldes en los años 50 hasta sus múltiples evoluciones en el punk, el indie y más allá, el poder de sus guitarras eléctricas y ritmos enérgicos nunca deja de inspirarme. La manera en que el rock ha moldeado la cultura juvenil y sigue siendo una fuerza creativa y provocativa en la música es algo que realmente me fascina y me motiva.' },
];

const Interests = () => {
  const [activeInterest, setActiveInterest] = useState(null);

  const handleInterestClick = (index) => {
    setActiveInterest(activeInterest === index ? null : index);
  };

  return (
    <section className={styles.interests}>
      <h2>Mis Intereses</h2>
      <ul>
        {interests.map((interest, index) => (
          <li key={index} className={styles.interestItem}>
            <button onClick={() => handleInterestClick(index)}>{interest.title}</button>
            {activeInterest === index && (
              <div className={styles.tooltipContainer}>
                <div className={styles.tooltip}>
                  <p>{interest.description}</p>
                  <button onClick={() => setActiveInterest(null)}>Cerrar</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
