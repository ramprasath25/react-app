import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
//Components
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Aboutpage from '../components/Aboutpage';
import Loginpage from '../components/Loginpage';
import Notfoundpage from '../components/Notfoundpage';
import userPage from '../components/userPage';

import './styles.css';
//Importing Store from config file
import store from './store.js';

class App extends React.Component {
	render() {
		return(
			<Router history={browserHistory}>
				<Route path='/' component={Header}>
					<IndexRoute component={Homepage}/>
					<Route path='/about' component={Aboutpage} />
                    <Route path='/users' component={userPage}/>
					<Route path='/login' component={Loginpage}/>
					<Route path='*' component={Notfoundpage}/>
				</Route>				
			</Router>
		)
	}
}
// Rendering Element
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));