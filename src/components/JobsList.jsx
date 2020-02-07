import React from 'react';

import JobItem from './JobItem';

const JobsList = ({ jobs }) => {
  return jobs.length > 0 ? (
    jobs.map((job) => <JobItem key={job.id} job={job} />)
  ) : (
    <p>No jobs found for the selected location...</p>
  );
};

export default JobsList;
