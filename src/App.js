import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as nums from './number';
let description = 'list';
let flag = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {nums.count * nums.length}
        </p>
      </header>
    </div>
  );
}

export default App;
