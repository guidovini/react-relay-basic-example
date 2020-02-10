import React from 'react';
import { QueryRenderer } from 'react-relay';

import environment from '../environment';

import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';

const QueryRendererContainer = ({ query, variables, children }) => {
  const renderQuery = ({ error, props }) => {
    if (error) {
      return <ErrorMessage />;
    }
    if (!props) {
      return <LoadingMessage />;
    }

    console.log(props);

    return React.cloneElement(children, { ...props });
  };

  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={variables}
      render={renderQuery}
    />
  );
};

export default QueryRendererContainer;
