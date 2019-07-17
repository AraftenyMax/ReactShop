import React from 'react';

class ProductDetailed extends React.Component {
	constructor(props) {
		super(props);
		this.id = props.match.params.id
	}

	render() {
		return (<div>Product detailed with id {this.id}.</div>);
	}
}

export default ProductDetailed;