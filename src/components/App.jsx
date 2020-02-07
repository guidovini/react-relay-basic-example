import React, { useState, useEffect } from 'react';

import SearchBox from './SearchBox';
import CitySelector from './CitySelector';

function App() {
  // const [cities, setCities] = useState([]);

  // useEffect(() => {
  //   // fetch data
  //   // setCities
  // }, []);

  return (
    <div>
      <h1>Placeholder</h1>
      <CitySelector />
      <SearchBox />
    </div>
  );
}

export default App;
