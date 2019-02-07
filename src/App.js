import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import { subscribeToTimer } from './test';


class App extends Component {

	constructor(props) {
	  super(props);

	  subscribeToTimer((err, timestamp) => this.setState({ 
		timestamp 
		}));
		
		

	}

	state = {
		timestamp: 'no timestamp yet'
	};

	render() {
	  return (
		<div className="App">
		  <div className="App-intro">
		  This is the timer value: {this.state.timestamp}
		  </div>
			<div><Home></Home></div>
		</div>
	  );
	}
}

export default App;
