import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaBolt, FaPalette, FaMobileAlt } from 'react-icons/fa';
import './Page.css';

function About() {
  return (
    <>
      <Helmet>
        <title>À propos | Mon Site Vite + React</title>
        <meta name="description" content="Découvrez les technologies utilisées pour ce site moderne et performant" />
      </Helmet>

      <motion.div 
        className="page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>À propos</h1>
        <p className="page-intro">
          Ce site est construit avec les <strong>technologies les plus modernes</strong> du web
        </p>
        
        <div className="features">
          <motion.div 
            className="feature"
            whileHover={{ scale: 1.05 }}
          >
            <FaBolt className="feature-icon" />
            <h3>⚡ Vite</h3>
            <p>Build tool ultra-rapide pour un développement fluide et des performances optimales</p>
          </motion.div>

          <motion.div 
            className="feature"
            whileHover={{ scale: 1.05 }}
          >
            <FaPalette className="feature-icon" />
            <h3>⚛️ React 18</h3>
            <p>La dernière version de React avec les hooks et les fonctionnalités modernes</p>
          </motion.div>

          <motion.div 
            className="feature"
            whileHover={{ scale: 1.05 }}
          >
            <FaMobileAlt className="feature-icon" />
            <h3>📱 Responsive</h3>
            <p>Design adaptatif qui fonctionne parfaitement sur tous les appareils</p>
          </motion.div>
        </div>

        <div className="tech-stack">
          <h2>Stack Technique</h2>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Vite</span>
            <span className="tech-tag">React Router</span>
            <span className="tech-tag">Framer Motion</span>
            <span className="tech-tag">CSS3</span>
            <span className="tech-tag">Vercel</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;