import axios from 'axios';

import {GET_CART, GET_CART_TOTAL} from "./types";

const SHOPPING_CART_ENDPOINT = "/api/shopping_cart"

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

        }).catch(err => console.log(err));
}

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

        }).catch(err => console.log(err));
}
