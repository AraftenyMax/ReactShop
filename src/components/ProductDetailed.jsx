import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
	let id = ownProps.match.params.id;
	let product = state.products.find((prod) => prod.id == id);
	let orderedCount = state.orderedProducts.find((ordered) => ordered.id == id).count;
	return {product: product, orderedCount: orderedCount ? orderedCount : 0};
}

class ProductDetailedConnected extends React.Component {
	constructor(props) {
		super(props);
		this.product = props.product;
		this.renderContent = this.renderContent.bind(this);
		this.addToBusket = this.addToBusket.bind(this);
		this.deleteFromBusket = this.deleteFromBusket.bind(this);
		this.state = {
			product: props.product,
			orderedCount: props.orderedCount
		};
	}

	addToBusket(event) {
		console.log("Adding to busket");
	}

	deleteFromBusket(event) {
		console.log("Delete from busket");
	}

	renderContent() {
		console.log(this.product);
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