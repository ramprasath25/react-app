import React,{Component} from 'react';
import {Link} from 'react-router';

class Cars extends Component {
	constructor() {
		super();
		this.state = {
			cars: []
		}
	}	
	render() {
		const carsList = this.props.route.data.map((car) => {
			return(
				<Link
                    to={"/cars/"+car.name}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
			)
		});
		return(
			<div>
				<h1>Cars List</h1>
				<div className="list-group">
					{carsList}
				</div>
			</div>
		)
	}
}

export default Cars