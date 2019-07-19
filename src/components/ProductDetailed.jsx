import React from 'react';
import {connect} from 'react-redux';
import {addToBusket, deleteFromBusket} from '../reducers/actions.js';

function mapStateToProps(state, ownProps) {
	let id = ownProps.match.params.id;
	let product = state.products.find((prod) => prod.id == id);
	let item = state.busket.orderedProducts.find((ordered) => ordered.id == id);
	let orderedCount = item ? item.count : 0;
	return {product: product, orderedCount: orderedCount};
}

class ProductDetailedConnected extends React.Component {
	constructor(props) {
		super(props);
		this.product = props.product;
		this.renderContent = this.renderContent.bind(this);
		this.addToBusket = this.addToBusket.bind(this);
		this.deleteFromBusket = this.deleteFromBusket.bind(this);
		this.dispatch = props.dispatch.bind(this);
		this.state = {
			product: props.product,
			orderedCount: props.orderedCount
		};
	}

	addToBusket(event) {
		let payload = addToBusket(this.state.product.id);
		this.dispatch(payload);
		this.setState({orderedCount: this.state.orderedCount + 1});
	}

	deleteFromBusket(event) {
		if (this.state.orderedCount > 0) {
			let payload = deleteFromBusket(this.state.product.id);
			this.dispatch(payload);
			this.setState({orderedCount: this.state.orderedCount - 1});
		}
	}

	renderContent() {
		if (this.product) {
			return (<div className="product-detailed">
			<h1 className="product-detailed-name">{this.state.product.name}</h1>
			<div className="product-detailed-img-container">
				<img className="product-detailed-img" src={this.state.product.image} />
			</div>
			<p className="product-detailed-price">Price: {this.state.product.price}$</p>
			<p className="product-detailed-count">Available: {this.state.product.count}</p>
			<div className="product-detailed-busket">
				<span className="product-detailed-busket-minus" onClick={this.deleteFromBusket}>-</span>
				<input className="product-detailed-busket-count" type="text" value={this.state.orderedCount}/>
				<span className="product-detailed-busket-plus" onClick={this.addToBusket}>+</span>
			</div>
			<p className="product-detailed-seller">Seller: {this.state.product.sellerName}</p>
			<p className="product-detailed-os">OS: {this.state.product.os}</p>
			<p className="product-detailed-description">About product: {this.state.product.description}</p>
			</div>);
		}
		return <p className="product-detailed-error">Sorry, but this product doesn't available.</p>
	}

	render() {
		return this.renderContent();
	}
}

const ProductDetailed = connect(mapStateToProps)(ProductDetailedConnected);

export default ProductDetailed;