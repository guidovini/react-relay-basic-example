import React from 'react';

const CitySelector = ({ selectedCity, cities, handleChange }) => {
  return (
    <select value={selectedCity} onChange={(e) => handleChange(e.target.value)}>
      {cities.map((city) => (
        <option value={city.slug} key={city.slug}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
