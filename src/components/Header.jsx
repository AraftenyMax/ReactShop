import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectProductsCount, selectBusketPrice} from '../reducers/reducers.js';

function mapPropsToState(state) {
	let price = selectBusketPrice(state);
	let count = selectProductsCount(state);
	return {totalPrice: price, totalCount: count};
}

class HeaderConnected extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div className="header">
			<div className="busket-container">
				<p className="busket-total-price">Total price:{this.props.totalPrice}$</p>
				<p className="busket-total-count">Total count:{this.props.totalCount}</p>		
				<Link to="/busket">View busket</Link>		
			</div>
			</div>);
	}
}

const Header = connect(mapPropsToState)(HeaderConnected);

export default Header;