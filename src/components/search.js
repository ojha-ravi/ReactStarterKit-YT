import * as React from "react";

export class SearchBar extends React.Component {
	handleOnChangeCurry = this.handleOnChange.bind(this);
	constructor(props) {
		super(props);

		this.state = {
			term: ""
		};
	}

	render() {
		return <div>
			<input placeholder="Enter to search here" onChange={this.handleOnChangeCurry} value={this.state.term}></input>
		</div>;
	}

	handleOnChange(e) {
		this.setState({
			term: e.target.value
		});
	}
}
