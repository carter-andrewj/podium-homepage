import React, { Component } from 'react';

import Fader from './fader';




class Demo extends Component {

	render() {

		return (
			<Fader>
				<p className="title">Live Demo</p>
				<p>
					The following demo is still under active development. As
					such, it currently does not support mobile devices and may
					exhibit unexpected behaviour in some browsers.
				</p>
				<button
					className="def-button green-button"
					onClick={() => window.open(
						"https://demo.podium-network.com",
						"_blank"
					)}>
					<span className="fa fa-rocket" aria-hidden="true"></span> continue
				</button>
				<button
					className="def-button red-button back-button"
					onClick={this.props.setHomeMode.bind(this, "menu")}>
					<span className="fa fa-arrow-circle-left" aria-hidden="true"></span> back
				</button>
			</Fader>
		);
	}

}

export default Demo;