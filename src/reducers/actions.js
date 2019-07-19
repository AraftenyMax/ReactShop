import Products from '../Products.js';
import {ADD_TO_BUSKET, DELETE_FROM_BUSKET, GET_BUSKET_TOTAL_PRICE} from '../constants/ActionTypes.js';

export function fetchProducts(data = "") {
	return Products;
}

export function addToBusket(itemId, count = 1) {
	return {type: ADD_TO_BUSKET, payload: {id: itemId, count: count}};
}

export function calculateBusketPrice() {
	return {type: GET_BUSKET_TOTAL_PRICE};
}

export function deleteFromBusket(itemId, count = 1) {
	return {type: DELETE_FROM_BUSKET, payload: {id: itemId, count: count}};
}