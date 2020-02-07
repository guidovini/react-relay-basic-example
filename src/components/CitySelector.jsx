import React, { useState, useEffect } from 'react';

const CitySelector = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState('berlin');

  useEffect(() => {
    console.log('You changed the city: ', selectedCity);
  }, [selectedCity]);

  return (
    <select
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.target.value)}
    >
      {cities.map((city) => (
        <option value={city.slug} key={city.slug}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
