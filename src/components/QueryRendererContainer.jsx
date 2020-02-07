import React from 'react';
import { QueryRenderer } from 'react-relay';

import environment from '../environment';

import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';

const renderQuery = ({ error, props }) => {
  if (error) {
    return <ErrorMessage />;
  }
  if (!props) {
    return <LoadingMessage />;
  }

  // eslint-disable-next-line no-console
  console.log(props);

  return <p>It worked!!</p>;
};

const QueryRendererContainer = ({ query, variables }) => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={variables}
    render={renderQuery}
  />
);

export default QueryRendererContainer;
