import React from 'react';
import logo from './logo.svg';
import './app.css';
import Calculator from './components/calculator'
import Clock from './components/clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Celsius - Fahrenheit Converter
        <Clock />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
