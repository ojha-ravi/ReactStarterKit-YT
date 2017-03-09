import * as React from "react";
import * as ReactDOM from "react-dom";
import { SearchBar } from "./components/search" 

const API_KEy = "AIzaSyD6ZbIYduRD5l30XHDx2MATlGIPQwha3HU"

// Create a new component. This should component should produce some HTML.
const App = () => {
	return <div>
		<SearchBar></SearchBar>
	</div>;
}

// Take this component's generated HTMl and shove it into DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
