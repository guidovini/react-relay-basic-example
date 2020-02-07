import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { fetchQuery } from 'relay-runtime';

import environment from '../environment';

import SearchBox from './SearchBox';
import CitySelector from './CitySelector';
import JobsListContainer from './JobsListContainer';

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
  const [selectedCity, setSelectedCity] = useState('berlin');

  useEffect(() => {
    fetchQuery(environment, query).then((data) => {
      setCities(data.cities);
    });
  }, []);

  useEffect(() => {
    console.log('You changed the city: ', selectedCity);
  }, [selectedCity]);

  return (
    <div>
      <h1>Placeholder</h1>
      <CitySelector
        selectedCity={selectedCity}
        cities={cities}
        handleChange={setSelectedCity}
      />
      <SearchBox />
      <JobsListContainer selectedCity={selectedCity} />
    </div>
  );
}

export default App;
