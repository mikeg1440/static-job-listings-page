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
        filter: newFilter
      })
    }
  }

  findCommonFilter = (array1, array2) => {
    for (const elem1 of array1){
      for (const elem2 of array2){
        if (elem1 === elem2) return true
      }
    }
    return false
  }

  renderListings = () => {
    const {filter} = this.state
    if (this.state.filter.length === 0){
      return data.map(listing => <Job key={listing.id} callback={this.addFilter} listing={listing} />)
    }else {
      let listings = data.filter(listing => {
        if (filter.includes(listing.role)) return listing
        if (filter.includes(listing.level)) return listing
        if (listing.tools && this.findCommonFilter(filter, listing.tools)) return listing
        if (listing.languages && this.findCommonFilter(filter, listing.languages)) return listing
      })

      return listings.map(listing => <Job key={listing.id} callback={this.addFilter} listing={listing} />)
    }
  }

  renderFilters = () => {
    const {filter} = this.state

    return (
      <div className='filter-container'>
        <div className='filter-labels-container'>
          {filter.map(label => <label className='filter-label'>{label}<button onClick={() => this.removeFilter(label)}>✖</button></label>)}
        </div>
        <a href="#" className='clear-label-link' onClick={() => this.removeFilter('all')}>Clear</a>
      </div>
    )
  }

  render(){
    const {filter} = this.state
    return (
      <div key={uniqid()} className="App">
        <img className='app-header' src={headerImg} alt='header banner' />
        {filter.length !== 0 ? this.renderFilters() : null}
        <div className='listing-container'>
          {/* {data.map(listing => <Job key={listing.id} callback={this.addFilter} listing={listing} />)} */}
          {this.renderListings()}
        </div>
      </div>
    );
  }
}

export default App;
