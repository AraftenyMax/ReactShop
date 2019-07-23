import Products from '../Products.js';
import {ADD_TO_BUSKET, DELETE_FROM_BUSKET, GET_BUSKET_TOTAL_PRICE, 
	REMOVE_FROM_BUSKET, CLEAR_BUSKET, MAKE_ORDER} from '../constants/ActionTypes.js';

export function fetchProducts(data = "") {
	let products = {};
	Products.map((product) => products[product.id] = product);
	return products;
}

export function addToBusket(itemId, count = 1) {
	return {type: ADD_TO_BUSKET, payload: {id: itemId, count: count}};
}

export function removeFromBusket(itemId) {
	return {type: REMOVE_FROM_BUSKET, payload: {id: itemId}};
}

export function calculateBusketPrice() {
	return {type: GET_BUSKET_TOTAL_PRICE};
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