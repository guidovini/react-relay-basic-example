import React, { useState, useEffect } from 'react';
import { fetchQuery } from 'relay-runtime';

import environment from '../environment';
import getCitiesQuery from '../data/queries/getCities';

import LocationSelectorBox from './LocationSelectorBox';

const LocationSelectorBoxContainer = ({
  selectedLocation,
  setSelectedLocation,
}) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchQuery(environment, getCitiesQuery).then(({ cities }) => {
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
