import React from 'react';
import headerImg from '../images/bg-header-desktop.svg';
import './App.css';

const data = require('../data.json');

function App() {
  return (
    <div className="App">
      <img className='app-header' src={headerImg} alt='header' />

      <div className='listing-container'>
        
      </div>
    </div>
  );
}

export default App;
