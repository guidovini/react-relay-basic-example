import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { fetchQuery } from 'relay-runtime';

import environment from '../environment';

import JobsList from './JobsList';

const query = graphql`
  query JobsListContainerQuery(
    $location: String!
    $first: Int
    $after: String
    $orderBy: JobOrderByInput
  ) {
    city(input: { slug: $location }) {
      jobs(first: $first, after: $after, orderBy: $orderBy) {
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

const JobsListContainer = ({ selectedLocation }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchQuery(environment, query, {
      location: selectedLocation,
    }).then(({ city }) => setJobs(city.jobs));
  }, [selectedLocation]);

  return <JobsList jobs={jobs} />;
};

export default JobsListContainer;
