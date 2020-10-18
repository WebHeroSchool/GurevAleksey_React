import React from 'react';
import logo from './logo.svg';
import './App.css';
let description = 'list';
let flag = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style = {{
          color: 'green'
        }}>
          To Do
        </h1>
        <p>
          {/* вывод переменной */}
          {description}
        </p>
        <p>
          {/* вывод числа */}
          {24}
        </p>
        <p>
          {/* вывод арифметической операции */}
          {24+50}
        </p>
        <p>
          {/* логическая операция */}
          {description && 'logic'  }
        </p>
        <p>
          {/* тернарная операция */}
          {flag ? 'true' : 'false'}
        </p>
        <p>
          {/* вывод undefined, null, true, false */}
          {undefined}
          {true}
          {false}
          {null}
        </p>
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
