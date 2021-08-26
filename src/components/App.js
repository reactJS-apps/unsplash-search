import { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID RLBCRw37Dlnrd4RDw6RpklMa-lZB010FHiY564ff7Ww',
      },
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.images.map((image) => {
          return (
            <img
              src={image.urls.regular}
              key={image.id}
              alt={image.alt_description}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
