import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';

import environment from './environment';

const query = graphql`
  query AppQuery {
    jobs {
      id
      title
      cities(where: { name: "Berlin" }) {
        name
        country {
          name
          isoCode
        }
      }
      tags {
        name
      }
      applyUrl
      company {
        name
        websiteUrl
        logoUrl
      }
      updatedAt
      postedAt
    }
  }
`;

const renderQuery = ({ error, props }) => {
  if (error) {
    return <div>Error!</div>;
  }
  if (!props) {
    return <div>Loading...</div>;
  }

  console.log(props);

  return <div>Query fetched</div>;
};

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{}}
        render={renderQuery}
      />
    );
  }
}
