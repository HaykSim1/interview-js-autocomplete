import React, { Component } from 'react';

import './style.css';

export default class SelectBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filteredData: [],
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.highlightMatch = this.highlightMatch.bind(this);
  }

  // find and highlight matched text
  highlightMatch(text) {
    const { query } = this.state;

    const splitted = text.split(this.state.query);

    return splitted.join(`<span style="color: red">${query}</span>`);
  };

  // handling list item click and set to input value
  handleSelected(value) {
    this.setState({
      query: value,
      filteredData: [],
    });
  };

  // handling onChange event
  handleChange(e) {
    const text = e.target.value;
    this.setState({ query: text });

    // empty result and return if no text in text input
    if (!text) {
      this.setState({
        filteredData: [],
      });

      return;
    };

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(result => {
      // filtering must be done in backend
      const filteredData = result.filter(item => item.title.search(text) >= 0);
      this.setState({
        filteredData,
      });
      // for errors we can use third party libs, something like toaster
    }).catch(console.log);
  };

  render() {
    return (
      <div className='search-container'>
        <input
          className='search-input'
          onChange={this.handleChange}
          placeholder='search'
          value={this.state.query}
        />
        {this.state.filteredData.length > 0 && <div className='popover-container'>
          <ul className='list'>
            {this.state.filteredData.map(item => (
              <li
                onClick={() => this.handleSelected(item.title)}
                className='list-item'
                key={item.id}
              >
                <div dangerouslySetInnerHTML={{ __html: this.highlightMatch(item.title)}} />
              </li>
            ))}
          </ul>
        </div>}
      </div>
    );
  };
}
