import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaComment } from 'react-icons/fa';
import './Page.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Mon Site Vite + React</title>
        <meta name="description" content="Contactez-nous pour toute question ou demande" />
      </Helmet>

      <motion.div 
        className="page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Contact</h1>
        <p className="page-intro">Envoyez-nous un message</p>
        
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="form-group">
            <label htmlFor="name">
              <FaUser /> Nom
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Votre nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="votre@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <FaComment /> Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder="Votre message..."
            ></textarea>
          </div>

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={submitted ? 'submitted' : ''}
          >
            {submitted ? '✅ Message envoyé !' : '📤 Envoyer'}
          </motion.button>
        </motion.form>

        <div className="contact-info">
          <div className="info-card">
            <h3>📧 Email</h3>
            <p>contact@dcorpacademy.com</p>
          </div>
          <div className="info-card">
            <h3>🌐 Site</h3>
            <p>ema.dcorpacademy.com</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;