import Products from '../Products.js';
import Filters from '../Filters.js';
import {ADD_TO_BUSKET, DELETE_FROM_BUSKET,
	REMOVE_FROM_BUSKET, CLEAR_BUSKET, MAKE_ORDER, 
	APPLY_FILTER, CLEAR_FILTER} from '../constants/ActionTypes.js';

export function fetchProducts(url = "") {
	let products = {};
	Products.map((product) => products[product.id] = product);
	return products;
}

export function fetchFilters(url = "") {
	return Filters;
}

export function applyFilter(filter) {
	return {type: APPLY_FILTER, payload: {filter: filter}};
}

export function clearFilter(filter) {
	return {type: CLEAR_FILTER, payload: {filter: filter}};
}

export function addToBusket(itemId, count = 1) {
	return {type: ADD_TO_BUSKET, payload: {id: itemId, count: count}};
}

export function removeFromBusket(itemId) {
	return {type: REMOVE_FROM_BUSKET, payload: {id: itemId}};
}

export function clearBusket() {
	return {type: CLEAR_BUSKET};
}

export function makeOrder() {
	return {type: MAKE_ORDER};
}

export function deleteFromBusket(itemId, count = 1) {
	return {type: DELETE_FROM_BUSKET, payload: {id: itemId, count: count}};
}