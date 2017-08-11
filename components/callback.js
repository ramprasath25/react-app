import {Component} from 'react';
import {setIdToken, setAccessToken} from './Auth';

class Callback extends Component {
	constructor() {
		super()
	}
	componentDidMount() {
		setIdToken();
		setAccessToken();
		window.location.href('/');
	}
	render() {
		return null;
	}
}

module.exports = Callback;