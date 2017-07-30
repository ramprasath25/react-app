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
import Bookpage from '../components/books/Bookpage';
import Cars from '../components/cars/cars';
import CarDetails from '../components/cars/CarDetails';

import './styles.css';
import configureStore from './store.js';
// Intializing store..
const store = configureStore();

const data = [
            {
                id: 1,
                name: 'Honda Accord Crosstour',
                year: '2010',
                model: 'Accord Crosstour',
                make: 'Honda',
                media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
                price: '$16,811'

            },
            {
                id: 2,
                name: 'Mercedes-Benz AMG GT Coupe',
                year: '2016',
                model: 'AMG',
                make: 'Mercedes Benz',
                media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
                price: '$138,157'

            },
            {
                id: 3,
                name: 'BMW X6 SUV',
                year: '2016',
                model: 'X6',
                make: 'BMW',
                media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
                price: '$68,999'
            },
            {
                id: 4,
                name: 'Ford Edge SUV',
                year: '2016',
                model: 'Edge',
                make: 'Ford',
                media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
                price: '$36,275'
            },
            {
                id: 5,
                name: 'Dodge Viper Coupe',
                year: '2017',
                model: 'Viper',
                make: 'Dodge',
                media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
                price: '$123,890'
            }
        ];
class App extends React.Component {
	render() {
		return(
			<Router history={browserHistory}>
				<Route path='/' component={Header}>
					<IndexRoute component={Homepage}/>
					<Route path='/about' component={Aboutpage} />
					<Route path='/cars' component={Cars} data={data}/>
					<Route path='/cars/:name' component={CarDetails} data={data}/>
                    <Route path='/books' component={Bookpage} books={data}/>
					<Route path='/login' component={Loginpage}/>
					<Route path='*' component={Notfoundpage}/>
				</Route>				
			</Router>
		)
	}
}
// Rendering Element
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));