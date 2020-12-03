import { GET_CARDS, DELETE_CARDS, ADD_CARDS } from '../actions/types.js';

const initialState = {
    cards: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_CARDS:
            return {
                ...state,
                cards: action.payload
            }
        case DELETE_CARDS:
            return {
                ...state,
                cards: state.cards.filter(cards => cards.id !== action.payload)
            };
        case ADD_CARDS:
            return {
                ...state,
                cards: [...state.cards, action.payload]
            };     
        default:
            return state;
    }
}