import { GET_CART } from "../actions/types.js"

const initialState = {
    shopping_cart: []
}

export default function (state = initialState, action) {
    switch (action.type){
        case GET_CART:
            return {
               ...state,
               shopping_cart: action.payload
            }
        default:
            return state;
    }
}