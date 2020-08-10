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
          Learn React Chumps & Chumpettes or not see if i care? do you even git bro?
          my code is out to ruin your codes day
          Learn React Chumps & Chumpettes
          {
            Array(100).fill(0).map((b, i)=> (
              <div key={i}>{b}</div>
            ))
          }
        </a>
        <p>do you even <strong>G</strong>it</p>
      </header>
    </div>
  );
}

export default App;
