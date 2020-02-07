import React from 'react';

import JobItem from './JobItem';

const JobsList = ({ jobs }) =>
  jobs.map((job) => <JobItem key={job.id} job={job} />);

export default JobsList;
