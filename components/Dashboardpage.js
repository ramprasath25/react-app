import React,{Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import Notfoundpage from '../components/Notfoundpage';
import Aboutpage from '../components/Aboutpage';

class Dashboard extends React.Component {
	constructor () {
		super();		
	}		
	render(){
			const p_img = this.props.loginStatus.loginDetails.pictureUrl;
        	const p_name = this.props.loginStatus.loginDetails.firstName +" "+this.props.loginStatus.loginDetails.lastName;
			const p_location = this.props.loginStatus.loginDetails.location;
		return(
			<div className="container">	
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">						
							<div className="top-header">
								<div className="top-header-thumb">
									<img src={require('../src/header.jpg')}/>
								</div>
								<div className="profile-section">
									<div className="row">
										<div className="col-lg-5 col-md-5 ">
											<ul className="profile-menu">
												<li>
													<a className="active">Timeline</a>
												</li>
												<li>
													<a>About</a>
												</li>
												<li>
													<a>Friends</a>
												</li>
											</ul>
										</div>
										<div className="col-lg-2"></div>
										<div className="col-lg-5 offset-lg-2 col-md-5 offset-md-2">
											<ul className="profile-menu">
												<li>
													<a>Photos</a>
												</li>
												<li>
													<a>Videos</a>
												</li>
												<li>
													<a>Videos</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="top-header-author">
										<img src={this.props.loginStatus.loginDetails.pictureUrl} className="img-circle img-thumbnail"/>
									<div className="author-content">
										<a className="h4 author-name">{p_name}</a>
										<div className="country">{p_location}</div>
									</div>
								</div>
							</div>
							<div>
							<Router history={browserHistory}>
								<Route path='dashboard/asd' component={Aboutpage}/>
								<Route path="dashboard/*" component={Notfoundpage}/>
							</Router>
							</div>
						</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		loginStatus : state.loginDetails
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);