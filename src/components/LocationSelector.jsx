import React from 'react';

const LocationSelector = ({ selectedLocation, locations, handleChange }) => (
  <select
    value={selectedLocation}
    onChange={(e) => handleChange(e.target.value)}
  >
    {locations.map(({ slug, name }) => (
      <option value={slug} key={slug}>
        {name}
      </option>
    ))}
  </select>
);

export default LocationSelector;
