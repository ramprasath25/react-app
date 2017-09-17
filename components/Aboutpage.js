import React from 'react';
import  {getJedis} from './getJedis';
class Aboutpage extends React.Component {
	constructor () {
		super();
		this.state = {
			jedis : []
		}
	}
	componentDidMount() {
		getJedis().then((data) => { this.setState({jedis:data})});
	}	
	render(){		
		const jedis = this.state.jedis.map(jedi => {
			return <li>{jedi.name}</li>
		});
		return(
			<div>
				{						 
					<div>
						<h1>Jedis Page!!!</h1>
						<ul>{jedis}</ul>
					</div> 			
				}
			</div>
		)
	}
}

module.exports = Aboutpage;