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
  findCommonFilter = (array1, array2) => {
    for (const elem1 of array1){
      for (const elem2 of array2){
        if (elem1 === elem2) return true
      }
    }
    return false
  }

  render(){
    return (
      </div>
    </div>
  );
  }
}

export default App;
