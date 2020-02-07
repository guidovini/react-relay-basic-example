import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { fetchQuery } from 'relay-runtime';

import environment from '../environment';

import JobsList from './JobsList';

const query = graphql`
  query JobsListContainerQuery(
    $city: String!
    $first: Int
    $after: String
    $orderBy: JobOrderByInput
  ) {
    city(input: { slug: $city }) {
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

const JobsListContainer = ({ selectedCity }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchQuery(environment, query, { city: selectedCity }).then((data) => {
      console.log(data);
      setJobs(data.city.jobs);
    });
  }, [selectedCity]);

  return <JobsList jobs={jobs} />;
};

export default JobsListContainer;
