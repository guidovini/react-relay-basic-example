import React from 'react';
import graphql from 'babel-plugin-relay/macro';

import JobsList from './JobsList';
import QueryRendererContainer from './QueryRendererContainer';

const query = graphql`
  query JobsListContainerQuery(
    $location: String!
    $first: Int
    $after: String
    $orderBy: JobOrderByInput
    $jobInput: String
  ) {
    city(input: { slug: $location }) {
      jobs(
        first: $first
        after: $after
        orderBy: $orderBy
        where: { slug_contains: $jobInput }
      ) {
        id
        title
        tags {
          name
        }
        applyUrl
        company {
          name
          websiteUrl
          logoUrl
        }
        cities {
          name
          country {
            name
            isoCode
          }
        }
        updatedAt
        postedAt
      }
    }
  }
`;

const JobsListContainer = ({
  selectedLocation: location,
  selectedJobInput: jobInput,
}) => {
  const variables = {
    location,
    jobInput,
  };

  return (
    <QueryRendererContainer query={query} variables={variables}>
      <JobsList />
    </QueryRendererContainer>
  );
};

export default JobsListContainer;
