import { combineReducers} from "redux";
import shopping_cart from './shopping_cart'
import booksorting from './booksorting';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    booksorting,
    shopping_cart,
    errors,
    messages,
});