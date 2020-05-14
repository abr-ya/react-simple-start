import React from 'react';
import styles from './app.scss';

function App() {
  return (
    <div className={styles.app}>
      <header className="App-header">
        <p>Это стартовый пакет из CRA + ESLint + node-sass.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
