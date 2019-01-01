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

  componentDidMount() {
    // Default Search term
    this.onSearchSubmit('Bruno Mars Grenade');
  }

  onSearchSubmit = async (term) => {
    try {
      const response = await youtubeAPI.get('/search', {
        params: {
          q: term
        }
      });
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
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
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
