import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectPagination} from '../reducers/reducers.js';

function mapStateToProps(state, props) {
	return {pages: selectPagination(state, props.page)};
}

const PagingButton = ({page}) => {
	return (<div className="pagination-item">
				<Link to={"/products/" + page}>{page}</Link>
			</div>);
}

class PaginationConnected extends React.Component {
	constructor(props) {
		super(props);
		this.currentPage = props.page;
		this.renderPagination = this.renderPagination.bind(this);
	}

	renderPagination() {
		return (<div className="paging-items">
			{this.props.pages.map((page) => <PagingButton page={page + 1} key={page} 
				className={page == this.currentPage ? 'current-page' : 'pagination-item'}/>)}
			</div>);
	}

	render() {
		return (<div className="pagination">
				{this.renderPagination()}
			</div>);
	}
}

const Pagination = connect(mapStateToProps)(PaginationConnected);
export default Pagination;