import { useState } from 'react';
import viteLogo from '/vite.svg';
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <div className="card">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Bienvenue sur Vite + React</h1>
      <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/Home.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Home;