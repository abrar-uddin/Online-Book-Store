import { GET_PROFILES, DELETE_PROFILES, ADD_PROFILES } from '../actions/types.js';

const initialState = {
    profiles: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_PROFILES:
            return {
                ...state,
                profiles: action.payload
            }
        case DELETE_PROFILES:
            return {
                ...state,
                profiles: state.profiles.filter(profiles => profiles.id !== action.payload)
            };
        case ADD_PROFILES:
            return {
                ...state,
                profiles: [...state.profiles, action.payload]
            };     
        default:
            return state;
    }
}