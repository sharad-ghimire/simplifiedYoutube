import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

import youtubeAPI from '../apis/youtube';

class App extends React.Component {
  state = {
    videos: []
  };

  onSearchSubmit = async (term) => {
    try {
      const response = await youtubeAPI.get('/search', {
        params: {
          q: term
        }
      });
      this.setState({ videos: response.data.items });
    } catch (err) {
      console.log('Error : ' + err);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
