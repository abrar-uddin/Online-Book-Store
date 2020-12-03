import { combineReducers} from "redux";
import shopping_cart from './shopping_cart'
import booksorting from './booksorting';
import errors from './errors';
import messages from './messages';

import profiles from '../../../../../Online-Book-Store/frontend/src/reducers/profiles';
import auth from "../../../../../Online-Book-Store/frontend/src/reducers/auth"
import cards from '../../../../../Online-Book-Store/frontend/src/reducers/cards'
import details from '../../../../../Online-Book-Store/frontend/src/reducers/details'

export default combineReducers({
    booksorting,
    shopping_cart,
    errors,
    messages,
    details,
    cards,
    profiles,
    auth
});