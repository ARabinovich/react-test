import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import Game from './Game.js';

function App() {
  // const ref = useRef(null);
  // const [x, setX] = useState(0);
  // const xToSpeed = x => { const w = window.innerWidth; return 10 * (4*w-x)/w; };
  return (
    <div className="App" >
      {/* <header className="App-header" onMouseMove={e => { setX(xToSpeed(e.clientX)); }} >
        <img src={logo} className="App-logo" alt="logo" style={{animation: `App-logo-spin infinite ${x}s linear`}}  />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Game />
    </div>
  );
}

export default App;
