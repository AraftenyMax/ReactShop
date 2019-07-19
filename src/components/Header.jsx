import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function mapPropsToState(state) {
	let price = 0, count = 0;
	state.busket.orderedProducts.forEach((orderedProduct) => {
		let productPrice = state.products.find((product) => product.id == orderedProduct.id).price;
		price += orderedProduct.count * productPrice;
		count += orderedProduct.count;
	});
	return {totalPrice: price, totalCount: count};
}

class HeaderConnected extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalCount: props.totalCount,
			totalPrice: props.totalPrice
		};
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