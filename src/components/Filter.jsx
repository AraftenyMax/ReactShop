import React from 'react';
import {connect} from 'react-redux';
import {applyFilter, clearFilter} from '../reducers/actions.js';
import {selectFilters} from '../reducers/reducers.js';

function mapStateToProps(state, props) {
	return {filters: selectFilters(state)};
}

class FilterConnected extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.filters = props.filters;
		this.categoryAttribute = 'category';
		this.dataAttribute = 'data';
		this.state = {
			userFilter: {}
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.addFilterValue = this.addFilterValue.bind(this);
		this.removeFilterValue = this.removeFilterValue.bind(this);
		this.clearFilter = this.clearFilter.bind(this);
		this.applyFilter = this.applyFilter.bind(this);
	}

	addFilterValue(filterName, filterValue) {
		let newFilter = {...this.state.userFilter};
		if (!(filterName in this.state.userFilter)) {
			newFilter[filterName] = [filterValue, ];
			this.setState({userFilter: newFilter});
			return;
		}
		newFilter[filterName].push(filterValue);
		this.setState({userFilter: newFilter});
	}

	removeFilterValue(filterName, filterValue) {
		let newFilter = {...this.state.userFilter};
		if (filterName in newFilter) {
			let index = newFilter[filterName].findIndex((value) => value == filterValue);
			if(index != -1) {
				newFilter[filterName].splice(index, 1);
			}
			if (newFilter[filterName].length == 0) {
				delete newFilter[filterName];
			}
			this.setState({userFilter: newFilter});
		}
	}

	clearFilter() {
		let payload = clearFilter();
		this.props.dispatch(payload);
	}

	applyFilter() {
		let payload = applyFilter(this.state.userFilter);
		this.props.dispatch(payload);
	}

	handleInputChange(event) {
		const target = event.target;
		const filterName = target.getAttribute(this.categoryAttribute);
		const filterValue = target.getAttribute(this.dataAttribute);
		const checked = target.checked;
		if (checked) {
			this.addFilterValue(filterName, filterValue);
		} else {
			this.removeFilterValue(filterName, filterValue);
		}
	}

	render() {
		return <div className="filter">
		<h2>Filter</h2>
		{Object.keys(this.filters).map((filterName) => 
			<div className="filter-section">
				<p className="filter-header">{filterName}</p>
				{this.filters[filterName].values.map((value, index) => 
					<div className="filter-name">
					<label>{value}</label>
					<input category={this.filters[filterName].fieldName}
						data={value} type="checkbox" onChange={this.handleInputChange} key={index} />
					</div>
				)}
			</div>			
		)}
		<div className="filter-controls">
			<button onClick={this.applyFilter}>Apply filter</button>
			<button onClick={this.clearFilter}>Clear filter</button>
		</div>
		</div>;
	}
}

const Filter = connect(mapStateToProps)(FilterConnected);
export default Filter;