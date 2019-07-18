import React from 'react';

class ProductPreview extends React.Component {
	constructor(props) {
		super(props);
		this.product = props.product;
	}

	render() {
		return (
			<div className="product-preview">
			<h1 className="product-preview-name">{this.product.name}</h1>
			<div className="product-preview-img-container">
				<img src={this.product.image} />
			</div>
			<span className="product-preview-price">{this.product.price}</span>
			</div>
			);
	}
}

export default ProductPreview;