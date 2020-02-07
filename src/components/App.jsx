import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { fetchQuery } from 'relay-runtime';

import environment from '../environment';

import SearchBox from './SearchBox';
import CitySelector from './CitySelector';

const query = graphql`
  query AppQuery {
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

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchQuery(environment, query).then((data) => {
      setCities(data.cities);
    });
  }, []);

  return (
    <div>
      <h1>Placeholder</h1>
      <CitySelector cities={cities} />
      <SearchBox />
    </div>
  );
}

export default App;
