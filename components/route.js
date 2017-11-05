import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {connect} from 'react-redux';
//Components
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Aboutpage from '../components/Aboutpage';
import Loginpage from '../components/Loginpage';
import Notfoundpage from '../components/Notfoundpage';
import DashTimeLine from '../components/dashboard/DashTimeLine';
import DashAbout from '../components/dashboard/DashAbout';
import DashFriends from '../components/dashboard/DashFriends';

class App extends React.Component {
	componentDidMount() {
		window.IN.init({
			api_key : '81yrfrfgcu5cku',
			authorize: true
		});
	}
	render() {
		const requireAuth = (nextState, replace)=> {
			const islogin = ((this.props.loginStatus.loginDetails !== '') ? true : false);
			if(!islogin) {
				replace('/login');
			}
		}
		const signIn = (nextState, replace)=> {			
			const islogin = ((this.props.loginStatus.loginDetails !== '') ? true : false);
			if(islogin) {
				replace('/dashboard/timeline');
			}
		}
		return(
			<Router history={browserHistory}>
				<Route path='/' component={Header}>
					<IndexRoute component={Homepage}/>
					<Route path="/about" component={Aboutpage}/>
					<Route path='/login' component={Loginpage} onEnter={signIn.bind(this)}/>
					<Route path="dashboard/timeline" component={DashTimeLine} onEnter={requireAuth.bind(this)}/>
					<Route path="dashboard/about" component={DashAbout} onEnter={requireAuth.bind(this)}/>
					<Route path="dashboard/friends" component={DashFriends} onEnter={requireAuth.bind(this)}/>
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