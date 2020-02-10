import React from 'react';

const SearchBox = ({ jobInput, handleChange }) => (
  <div>
    <input
      value={jobInput}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Search for jobs"
    />
    <button type="button" onClick={() => handleChange('')}>
      x
    </button>
  </div>
);

export default SearchBox;
