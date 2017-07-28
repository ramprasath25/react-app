import React from 'react';
import {Link} from 'react-router';

class Navlinks extends React.Component{
	render() {
		return(
			<li><Link {...this.props} activeClassName="active"/></li>
		)
	}
}

export default Navlinks;