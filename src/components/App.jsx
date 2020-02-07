import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';

import environment from '../environment';

import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';
import JobsList from './JobsList';

const variables = {
  city: 'berlin',
  orderBy: 'title_ASC',
  first: null,
  after: null,
};

const getJobsByCityQuery = graphql`
  query AppQuery(
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

const renderQuery = ({ error, props }) => {
  if (error) {
    return <ErrorMessage />;
  }
  if (!props) {
    return <LoadingMessage />;
  }

  // eslint-disable-next-line react/destructuring-assignment
  const { jobs } = props.city;
  // eslint-disable-next-line no-console
  console.log(jobs);

  return <JobsList jobs={jobs} />;
};

const App = () => (
  <QueryRenderer
    environment={environment}
    query={getJobsByCityQuery}
    variables={variables}
    render={renderQuery}
  />
);

export default App;
