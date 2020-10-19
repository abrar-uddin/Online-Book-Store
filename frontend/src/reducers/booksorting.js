import { GET_BOOKS} from '../actions/types.js';

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
        default:
            return state;
    }
}
