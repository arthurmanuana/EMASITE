import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('light-mode');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">🚀 Gilwanji Emmanuel</Link>
      </div>
      
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
            À propos
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>

      <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;