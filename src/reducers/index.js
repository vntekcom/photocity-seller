import { combineReducers } from 'redux';
import products from './products';
import orders from './orders';

const appReducers = combineReducers({
    products,
    orders
})

export default appReducers;