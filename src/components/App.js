import React from 'react';
import uniqid from 'uniqid';
import headerImg from '../images/bg-header-desktop.svg';
import Job from './Job';
import './App.css';

const data = require('../data.json');

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      filter: []
    }
  }

  addFilter = (term) => {
    const {filter} = this.state
    if (!filter.includes(term)){
      this.setState({
        filter: [...filter, term]
      })
    }
  }

  removeFilter = (labelToRemove) => {
    if (labelToRemove === 'all'){
      this.setState({
        filter: []
      })
    }else {
      const newFilter = this.state.filter.filter(label => label !== labelToRemove)
      this.setState({
  render(){
    return (
      </div>
    </div>
  );
  }
}

export default App;
