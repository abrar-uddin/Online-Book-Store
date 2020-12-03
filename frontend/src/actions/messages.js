import { CREATE_MESSAGE, GET_ERRORS } from './types'

//Creates the message. 
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};

//Return Errors (UnAuth)

export const returnErrors = (msg, status) =>{
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    };
};