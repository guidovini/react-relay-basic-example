import React from 'react';
import graphql from 'babel-plugin-relay/macro';

import QueryRendererContainer from './QueryRendererContainer';

const getAllCitiesQuery = graphql`
  query CitySelectorQuery {
    cities {
      name
      slug
      country {
        name
        isoCode
      }
    }
  }
`;

const CitySelector = () => (
  <div>
    <p>City selector</p>
    <QueryRendererContainer query={getAllCitiesQuery} />
  </div>
);

export default CitySelector;
