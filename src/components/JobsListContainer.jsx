import React from 'react';

import getJobsByCityQuery from '../data/queries/getJobsByCity';
import QueryRendererContainer from './QueryRendererContainer';

import JobsList from './JobsList';

const JobsListContainer = ({ jobInput, selectedLocation: location }) => {
  const variables = {
    jobInput,
    location,
  };

  return (
    <QueryRendererContainer query={getJobsByCityQuery} variables={variables}>
      <JobsList />
    </QueryRendererContainer>
  );
};

export default JobsListContainer;
