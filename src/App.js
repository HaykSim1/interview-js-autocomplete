import React, { useState } from 'react';

import SelectBox from './components/SelectBox';
import SelectBoxHook from './components/SelectBoxHook';

import logo from './logo.svg';
import './App.css';

function App() {
  const [withHook, setWithHook] = useState(false);
  return (
    <>
      <button onClick={() => setWithHook(v => !v)}> Hook on/off</button>
      <div className="App">
        {withHook ? <SelectBoxHook/> : <SelectBox/>}
      </div>
    </>
  );
}

export default App;
