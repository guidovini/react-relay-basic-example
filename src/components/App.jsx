import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { fetchQuery } from 'relay-runtime';

import environment from '../environment';

import SearchBox from './SearchBox';
import LocationSelector from './LocationSelector';
import JobsListContainer from './JobsListContainer';

const query = graphql`
  query AppQuery {
    countries {
      name
      slug
      isoCode
      cities {
        name
        slug
      }
    }
  }
`;

function App() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('united-states');

  useEffect(() => {
    fetchQuery(environment, query).then(({ countries }) => {
      setLocations(countries);
    });
  }, []);

  useEffect(() => {
    console.log('You changed the location: ', selectedLocation);
  }, [selectedLocation]);

  return (
    <div>
      <h1>Placeholder</h1>
      <LocationSelector
        selectedLocation={selectedLocation}
        locations={locations}
        handleChange={setSelectedLocation}
      />
      <SearchBox />
      <JobsListContainer selectedLocation={selectedLocation} />
    </div>
  );
}

export default App;
