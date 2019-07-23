import React from 'react';
import {connect} from 'react-redux';
import BusketCountControls from './BusketCountControls.jsx';
import {removeFromBusket} from '../reducers/actions.js';
import {Link} from 'react-router-dom';
import {selectProductPrice} from '../reducers/reducers.js';

function mapStateToProps(state, props) {
	let itemPrice = selectProductPrice(state, props.product.id);
	return {itemTotalPrice: itemPrice};
}

class BusketProductPreviewConnected extends React.Component {
	constructor(props) {
		super(props);
		this.onProductRemove = this.onProductRemove.bind(this);
	}

	onProductRemove(event) {
		let id = this.props.product.id;
		let payload = removeFromBusket(id);
		this.props.dispatch(payload);
	}

	render() {
		return <div>
			<p className="busket-product-number">{this.props.number}</p>
			<p className="busket-product-name">
				<Link to={"/product/" + this.props.product.id}>{this.props.product.name}</Link>
			</p>
			<p className="busket-product-sellerName">{this.props.product.sellerName}</p>
			<p className="busket-product-price">{this.props.product.price}</p>
			<div className="busket-product-ordered-count">
				<BusketCountControls id={this.props.product.id} />
			</div>
			<p className="busket-product-item-price">{this.props.itemTotalPrice}</p>
			<div className="busket-product-delete">
				<button onClick={this.onProductRemove}>Remove</button>
			</div>
		</div>;
	}
}

const BusketProductPreview = connect(mapStateToProps)(BusketProductPreviewConnected);

export default BusketProductPreview;