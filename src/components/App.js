import { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
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
