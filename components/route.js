import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {connect} from 'react-redux';
//Components
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Aboutpage from '../components/Aboutpage';
import Loginpage from '../components/Loginpage';
import Notfoundpage from '../components/Notfoundpage';
import Dashboard from '../components/Dashboardpage'

class App extends React.Component {	
	render() {
		const requireAuth = function(nextState, replace) {
			const islogin = ((this.props.loginStatus.loginDetails !== '') ? true : false);
			if(!islogin) {
				replace('/login');
			}
		}
		const signIn = function(nextState, replace) {
			const islogin = ((this.props.loginStatus.loginDetails !== '') ? true : false);
			if(islogin) {
				replace('/dashboard');
			}
		}
		// onEnter={signIn.bind(this)}
		return(
			<Router history={browserHistory}>
				<Route path='/' component={Header}>
					<IndexRoute component={Homepage} />
					<Route path="/about" component={Aboutpage}/>
					<Route path='/login' component={Loginpage} />
					<Route path='/dashboard' component={Dashboard} onEnter={requireAuth.bind(this)}/>
					<Route path='*' component={Notfoundpage}/>
				</Route>				
			</Router>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginDetails
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);