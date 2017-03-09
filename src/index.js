import * as React from "react";
import * as ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import { SearchBar } from "./components/search" 
import { VideoList } from "./components/video_list";
import { VideoDeatil } from "./components/video_detail"

const API_KEY = "AIzaSyD6ZbIYduRD5l30XHDx2MATlGIPQwha3HU";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: []
		};

		YTSearch({key: API_KEY, term: "surfboard"}, videos => {
			this.setState({
				videos
			});
		});
	}

	render() {
		return <div>
			<SearchBar></SearchBar>
			<VideoDeatil video={this.state.videos[0]}></VideoDeatil>;
			<VideoList videos={this.state.videos}></VideoList>
		</div>;
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));
