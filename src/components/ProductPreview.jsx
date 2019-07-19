import React from 'react';
import {Link} from 'react-router-dom';

class ProductPreview extends React.Component {
	constructor(props) {
		super(props);
		this.product = props.product;
	}

	render() {
		return (
			<div className="product-preview">
			<Link to={"/product/" + this.product.id}>
			<h1 className="product-preview-name">{this.product.name}</h1>
			<div className="product-preview-img-container">
				<img className="product-preview-img" src={this.product.image} />
			</div>
			</Link>
			<span className="product-preview-price">Price: {this.product.price}$</span>
			</div>
			);
	}
}

export default ProductPreview;