import { combineReducers } from 'redux';
import products from './products';
import orders from './orders';
import user from './user';

const appReducers = combineReducers({
    products,
    orders,
    user
})

export default appReducers;