import { GET_DETAILS, DELETE_DETAILS, ADD_DETAILS } from '../actions/types.js';

const initialState = {
    details: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case DELETE_DETAILS:
            return {
                ...state,
                details: state.details.filter(details => details.id !== action.payload)
            };
        case ADD_DETAILS:
            return {
                ...state,
                details: [...state.details, details.payload]
            };     
        default:
            return state;
    }
}