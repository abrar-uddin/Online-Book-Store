import { combineReducers} from "redux";
import booksorting from './booksorting';
import shopping_cart from './shopping_cart';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    booksorting,
    shopping_cart,
    errors,
    messages,
});