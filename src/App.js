import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Chumps & Chumpettes
          {
            Array(100).fill(0).map((b, i)=> (
              <div key={i}>{b}</div>
            ))
          }
        </a>
      </header>
    </div>
  );
}

export default App;
