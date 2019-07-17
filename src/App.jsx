import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ProductsList from './ProductsList.jsx';
import ProductDetailed from './ProductDetailed.jsx';
import Busket from './Busket.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Route path="/basket" component={Busket} />
				<Route path="/product/:id" component={ProductDetailed} />
				<Route path="/products/:page?" component={ProductsList} />
			</Router>);
	}
}

export default App;