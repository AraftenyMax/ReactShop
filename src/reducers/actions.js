import Products from '../Products.js';
import Filters from '../Filters.js';
export const ADD_TO_BUSKET = "ADD_TO_BUSKET";
export const DELETE_FROM_BUSKET = "DELETE_FROM_BUSKET";
export const REMOVE_FROM_BUSKET = "REMOVE_FROM_BUSKET";
export const MAKE_ORDER = "MAKE_ORDER";
export const CLEAR_BUSKET = "CLEAR_BUSKET";
export const APPLY_FILTER = "APPLY_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export function fetchProducts(url = "") {
	let products = {};
	Products.map((product) => products[product.id] = product);
	return products;
}

export function fetchFilters(url = "") {
	return Filters;
}

export const applyFilter = (filter) => ({type: APPLY_FILTER, payload: {filter: filter}}); 

export const clearFilter = () => ({type: CLEAR_FILTER});

export const addToBusket = (itemId, count) => 
	({type: ADD_TO_BUSKET, payload: {id: itemId, count: count}});

export const removeFromBusket = (itemId) => ({type: REMOVE_FROM_BUSKET, payload: {id: itemId}});

export const clearBusket = () => ({type: CLEAR_BUSKET});

export const makeOrder = () => ({type: MAKE_ORDER});

export const deleteFromBusket = (itemId, count) =>
	({type: DELETE_FROM_BUSKET, payload: {id: itemId, count: count}});