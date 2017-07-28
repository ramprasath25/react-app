import React, {Component} from 'react';
import {Link} from 'react-router';
class CarDetails extends Component {
	render() {
		const carDetail = this.props.route.data.filter((car)=>{
			if(car.name === this.props.params.name) {
				return car;
			}
		});
		return (
			<div>
                <h1>{carDetail[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={carDetail[0].media} alt={carDetail[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {carDetail[0].model}</li>
                           <li><strong>Make</strong>: {carDetail[0].make}</li>
                           <li><strong>Year</strong>: {carDetail[0].year}</li>
                           <li><strong>Price</strong>: {carDetail[0].price}</li>
                       </ul>
                       <h5><Link to="/cars">Back</Link></h5>
                    </div>
                </div>
            </div>
		)
	}
}

export default CarDetails;