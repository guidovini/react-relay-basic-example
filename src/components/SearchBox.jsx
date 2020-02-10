import React from 'react';

const SearchBox = ({ jobInput, handleChange }) => (
  <input
    value={jobInput}
    onChange={(e) => handleChange(e.target.value)}
    placeholder="Search for jobs"
  />
);

export default SearchBox;
