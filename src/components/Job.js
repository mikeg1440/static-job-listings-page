import React from 'react';

const Job = ({listing}) => (
  <div className={listing.featured ? 'job-listing featured' : 'job-listing' }>
    <div className='logo-container'>
      <img className='company-logo' src={listing.logo} alt={listing.company + ' logo'} />
    </div>

    <div className='details-container'>
      <div>
        <h2>{listing.company}</h2>
        {listing.new ? <label className='label new-label'>NEW</label> : null}
        {listing.featured ? <label className='label featured-label'>FEATURED</label> : null}
      </div>
      <h1>{listing.position}</h1>

      <div>
        <p>{`${listing.contract}  *  ${listing.postedAt}  *  ${listing.location}`}</p>
      </div>
    </div>

    <div className='label-container'>
      <label>{listing.role}</label>
      <label>{listing.level}</label>
      {listing.tools ? listing.tools.map(tool => <label>{tool}</label>) : null}
      {listing.languages ? listing.languages.map(language => <label>{language}</label>) : null}
    </div>
  </div>
);

export default Job;
