import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { fetchQuery } from 'relay-runtime';

import environment from '../environment';

import SearchBox from './SearchBox';
import LocationSelectorBox from './LocationSelectorBox';
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
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('berlin');

  useEffect(() => {
    fetchQuery(environment, query).then(({ cities }) => {
      setLocations(cities);
    });
  }, []);

  useEffect(() => {
    console.log('You changed the location: ', selectedLocation);
  }, [selectedLocation]);

  return (
    <div>
      <h1>GraphQL Jobs</h1>
      <LocationSelectorBox
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
