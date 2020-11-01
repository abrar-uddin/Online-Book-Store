import {GET_BOOKS, GET_BOOKS_CATEGORY} from '../actions/types.js';

const initialState = {
    booksorting: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                booksorting: action.payload
            }
        case GET_BOOKS_CATEGORY:
            return {
                ...state,
                booksorting: action.payload
            }
        default:
            return state;
    }
}
