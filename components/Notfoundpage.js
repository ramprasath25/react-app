import React from 'react';
import {Link} from 'react-router';

class Notfoundpage extends React.Component {
	render(){
		return(			
            <div className="text-center">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <p>
                    Sorry, an error has occured, Requested page not found!
                </p>
                <div className="error-actions">
                   <Link to="/"> <span className="btn btn-primary btn-lg">
                   	<span className="glyphicon glyphicon-home"></span>
                       Take Me Home </span></Link>
                </div>
           	</div>
		)
	}
}

export default Notfoundpage;