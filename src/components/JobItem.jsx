import React from 'react';

const JobItem = ({ job: { title, cities, company, applyUrl, tags } }) => (
  <div>
    <h1>
      {title} - {cities[0].name}
    </h1>
    <h2>
      <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer">
        {company.name}
      </a>
    </h2>
    {tags.map((tag) => (
      <p key={tag.name}>{tag.name}</p>
    ))}
    <a href={applyUrl} target="_blank" rel="noopener noreferrer">
      Apply
    </a>
  </div>
);

export default JobItem;
