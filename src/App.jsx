import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ProductsList from './components/ProductsList.jsx';
import ProductDetailed from './components/ProductDetailed.jsx';
import Busket from './components/Busket.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header/>
				<Router>
					<Route path="/basket" component={Busket} />
					<Route path="/product/:id" component={ProductDetailed} />
					<Route path="/products/:page?" component={ProductsList} />
				</Router>
			<Footer/>
			</div>
			);
	}
}

export default App;