import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaHeart } from 'react-icons/fa';
import viteLogo from '/vite.svg';
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>Accueil | Mon Site Vite + React</title>
        <meta name="description" content="Bienvenue sur mon site web moderne construit avec Vite et React - Rapide, moderne et performant" />
      </Helmet>

      <motion.div 
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero">
          <motion.div 
            className="logo-container"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Bienvenue sur <span className="gradient-text">Vite + React</span>
          </motion.h1>
          
          <motion.p 
            className="subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Un site ultra-rapide et moderne ⚡
          </motion.p>
        </div>

        <div className="features">
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket className="feature-icon" />
            <h3>🚀 Ultra Rapide</h3>
            <p>Chargement instantané grâce à Vite</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode className="feature-icon" />
            <h3>⚛️ React Moderne</h3>
            <p>Components et hooks à jour</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHeart className="feature-icon" />
            <h3>💜 Open Source</h3>
            <p>100% gratuit et libre</p>
          </motion.div>
        </div>

        <motion.div 
          className="counter"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <button onClick={() => setCount((count) => count + 1)}>
            👆 Compteur: {count}
          </button>
          <p className="read-the-docs">
            Edit <code>src/pages/Home.jsx</code> pour modifier cette page
          </p>
        </motion.div>

        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default Home;