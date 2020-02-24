import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
	render() {
		return (
			<div>
				<Search onSearch = {this.props.onSearch}/>
				<Sort onMainFilter = {this.props.onMainFilter}/>
            </div>
		);
	}
}

export default Control;