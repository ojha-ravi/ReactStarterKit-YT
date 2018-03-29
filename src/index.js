import * as React from 'react';
import * as ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { SearchBar } from './components/search';
import { VideoList } from './components/video_list';
import { VideoDetail } from './components/video_detail';
import * as _ from 'lodash';

const API_KEY = 'AIzaSyD6ZbIYduRD5l30XHDx2MATlGIPQwha3HU';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: undefined
    };

    this.videoSearch('surfboards');
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
      </div>
    );
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
