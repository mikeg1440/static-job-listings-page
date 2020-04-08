import React from 'react';

const Job = ({}) => (
  <div className='job-listing'>
    <div className='logo-container'>
      <img src='images/myhome.svg' />
    </div>

    <div className='details-container'>
      <span>
        <h2>Company Name</h2>
        <label>NEW!</label>
      </span>
      <h1>Position</h1>

      <span>
        <p>Age - Duration - Location</p>
      </span>
    </div>

    <div className='label-container'>
      <b>Labels</b>
      <b>Labels</b>
      <b>Labels</b>
    </div>
  </div>
);

export default Job;
