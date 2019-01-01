import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

import youtubeAPI from '../apis/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
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

  onVideoSelect = (selectedVdo) => {
    this.setState({ selectedVideo: selectedVdo });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
