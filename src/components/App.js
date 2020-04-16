import React from 'react';
import uniqid from 'uniqid';
import headerImg from '../images/bg-header-desktop.svg';
import Job from './Job';
import './App.css';

const data = require('../data.json');

function App() {
  return (
    <div key={uniqid()} className="App">
      <img className='app-header' src={headerImg} alt='header banner' />
      {console.table(data)}
      <div className='listing-container'>
        {data.map(listing => <Job key={listing.id} listing={listing} />)}
class App extends React.Component {
  render(){
    return (
      </div>
    </div>
  );
  }
}

export default App;
