import React from 'react';

const CitySelector = ({ cities }) => (
  <select>
    {cities.map((city) => (
      <option value={city.slug} key={city.slug}>
        {city.name}
      </option>
    ))}
  </select>
);

export default CitySelector;
