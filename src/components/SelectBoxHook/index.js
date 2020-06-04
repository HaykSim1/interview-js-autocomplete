import React, { useState } from 'react';

import './style.css';

export default function SelectBox() {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // find and highlight matched text
  const highlightMatch = text => text.split(query).join(`<span style="color: red">${query}</span>`);

  // handling list item click and set to input value
  const handleSelected = value => {
    setQuery(value);
    setFilteredData([]);
  };

  // handling onChange event
  const handleChange = e => {
    const text = e.target.value;
    setQuery(text);

    // empty result and return if no text in text input
    if (!text) {
      setFilteredData([]);
      return;
    };

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(result => {
      // filtering must be done in backend
      const filteredData = result.filter(item => item.title.search(text) >= 0);
      setFilteredData(filteredData);
      // for errors we can use third party libs, something like toaster
    }).catch(console.log);
  };

  return (
    <div className='search-container'>
      <input
        className='search-input'
        onChange={handleChange}
        placeholder='search with hook'
        value={query}
      />
      {filteredData.length > 0 && <div className='popover-container'>
        <ul className='list'>
          {filteredData.map(item => (
            <li
              onClick={() => handleSelected(item.title)}
              className='list-item'
              key={item.id}
            >
              <div dangerouslySetInnerHTML={{ __html: highlightMatch(item.title)}} />
            </li>
          ))}
        </ul>
      </div>}
    </div>
  );
}
