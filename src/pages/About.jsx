import './Page.css';

function About() {
  return (
    <div className="page">
      <h1>À propos</h1>
      <p>
        Ceci est une page de démonstration utilisant <strong>React Router</strong>.
      </p>
      <div className="features">
        <div className="feature">
          <h3>🚀 Rapide</h3>
          <p>Navigation instantanée entre les pages sans rechargement</p>
        </div>
        <div className="feature">
          <h3>⚡ Simple</h3>
          <p>Configuration minimale pour un maximum d'efficacité</p>
        </div>
        <div className="feature">
          <h3>🎨 Stylé</h3>
          <p>Design moderne et responsive prêt à l'emploi</p>
        </div>
      </div>
    </div>
  );
}

export default About;