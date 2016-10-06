import React, {Component} from 'react';
import './App.css';
import {Origami} from './Origami';

const minStage = 0;
const maxStage = 3;

const incrementStage = ({stage = minStage} = {}) => ({
	stage: maxStage > stage ? stage + 1 : minStage
});

const decrementStage = ({stage = maxStage} = {}) => ({
	stage: stage > minStage ? stage - 1 : maxStage
});

let changeStage = incrementStage;

const swingStage = (state) => {
	const newState = changeStage(state);
	const {stage} = newState;

	if (stage === minStage) {
		changeStage = incrementStage;
	} else if (stage === maxStage) {
		changeStage = decrementStage;
	}

	return newState;
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	handleIncrementStage() {
		this.setState(swingStage);
	}
	render() {
		return (
			<div className="App" onClick={() => this.handleIncrementStage()}>
				<Origami stage={this.state.stage}/>
			</div>
		);
	}
}

export default App;
