import React from 'react';
import headerImg from '../images/bg-header-desktop.svg';
import Job from './Job';
import './App.css';

const data = require('../data.json');

function App() {
  return (
    <div className="App">
      <img className='app-header' src={headerImg} alt='header' />
      {console.table(data)}
      <div className='listing-container'>
        {data.map(listing => <Job key={listing.id} listing={listing} />)}
      </div>
    </div>
  );
}

export default App;
