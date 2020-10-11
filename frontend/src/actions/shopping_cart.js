import axios from 'axios';

import {GET_CART} from "./types";

const SHOPPING_CART_ENDPOINT = "/api/shopping_cart"

// GET Cart
export const getCart = () => dispatch => {
    axios.get(SHOPPING_CART_ENDPOINT)
        .then(res => {
            console.log('res.data')
            axios.get(SHOPPING_CART_ENDPOINT.concat("/", res.data[0]["id"], "/get_cart_books"))
                .then(res2 => {
                    dispatch({
                        type: GET_CART,
                        payload: res2.data
                    });
                })

        }).catch(err => console.log(err));


}
