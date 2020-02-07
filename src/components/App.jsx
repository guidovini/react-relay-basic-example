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
  after: null
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
    <ErrorMessage />;
  }
  if (!props) {
    <LoadingMessage />;
  }

  const jobs = props.city.jobs;
  console.log(jobs);

  <JobsList jobs={jobs} />;
};

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={getJobsByCityQuery}
        variables={variables}
        render={renderQuery}
      />
    );
  }
}
