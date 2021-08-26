import { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID RLBCRw37Dlnrd4RDw6RpklMa-lZB010FHiY564ff7Ww',
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
