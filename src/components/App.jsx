import React, { useState } from 'react';

import SearchBox from './SearchBox';
import JobsListContainer from './JobsListContainer';
import LocationSelectorBoxContainer from './LocationSelectorBoxContainer';

function App() {
  const [selectedLocation, setSelectedLocation] = useState('berlin');
  const [jobInput, setJobInput] = useState('');

  return (
    <div>
      <h1>GraphQL Jobs</h1>
      <LocationSelectorBoxContainer
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <SearchBox jobInput={jobInput} handleChange={setJobInput} />

      <JobsListContainer
        jobInput={jobInput}
        selectedLocation={selectedLocation}
      />
    </div>
  );
}

export default App;
