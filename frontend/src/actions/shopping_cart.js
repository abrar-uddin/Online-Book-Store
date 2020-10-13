import axios from 'axios';

import { createMessage, returnErrors } from './messages';
import {GET_CART, GET_CART_TOTAL, DELETE_ITEM, UPDATE_ITEM} from "./types";

const SHOPPING_CART_ENDPOINT = "/api/shopping_cart"
const ITEM_ENDPOINT = "/api/item"

// GET Cart
export const getCart = () => dispatch => {
    axios.get(SHOPPING_CART_ENDPOINT)
        .then(res => {
            axios.get(SHOPPING_CART_ENDPOINT.concat("/", res.data[0]["id"], "/get_cart"))
                .then(res2 => {
                    dispatch({
                        type: GET_CART,
                        payload: res2.data
                    });
                })

        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// GET Cart Total
export const getCartTotal = () => dispatch => {
    axios.get(SHOPPING_CART_ENDPOINT)
        .then(res => {
            axios.get(SHOPPING_CART_ENDPOINT.concat("/", res.data[0]["id"], "/get_cart_total"))
                .then(res2 => {
                    dispatch({
                        type: GET_CART_TOTAL,
                        payload: res2.data
                    });
                })

        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// UPDATE Item
export const updateItem = (id, quantity,book_id, user, price) => dispatch => {
    axios.put(`${ITEM_ENDPOINT}/${id}/`, {
        "quantity": quantity,
        "book": book_id,
        "user": user
    })
        .then(res => {
            dispatch({
                type: UPDATE_ITEM,
                payload: price*quantity
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE Item
export const deleteItem = (id) => dispatch => {
    axios.delete(`${ITEM_ENDPOINT}/${id}/`)
        .then(res => {
            getCartTotal()
            dispatch(createMessage({ deleteLead: 'Item Deleted' }));
            dispatch({
                type: DELETE_ITEM,
                payload: id
            });
        }).catch(err => console.log(err));
};