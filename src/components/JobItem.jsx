import React from 'react';

const JobItem = ({ job }) => {
  return (
    <div>
      <p>{job.title}</p>
    </div>
  );
};

export default JobItem;
