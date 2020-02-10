import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { fetchQuery } from 'relay-runtime';

import environment from '../environment';

import LocationSelectorBox from './LocationSelectorBox';

const query = graphql`
  query LocationSelectorBoxContainerQuery {
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

const LocationSelectorBoxContainer = ({
  selectedLocation,
  setSelectedLocation,
}) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchQuery(environment, query).then(({ cities }) => {
      setLocations(cities);
    });
  }, []);

  return (
    <LocationSelectorBox
      selectedLocation={selectedLocation}
      locations={locations}
      handleChange={setSelectedLocation}
    />
  );
};

export default LocationSelectorBoxContainer;
