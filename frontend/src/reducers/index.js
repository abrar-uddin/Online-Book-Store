import { combineReducers} from "redux";
import shopping_cart from './shopping_cart'
import errors from './errors';
import messages from './messages';

export default combineReducers({
    shopping_cart,
    errors,
    messages,
});