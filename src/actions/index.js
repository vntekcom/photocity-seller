import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

//Fetch products
export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}
export const actFetchProducts = products => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

//Fetch Menus
export const actFetchMenusRequest = () => {
    return dispatch => {
        return callApi('menus', 'GET', null).then(res => {
            dispatch(actFetchMenus(res.data))
        })
    }
}
export const actFetchMenus = menus => {
    return {
        type: Types.FETCH_MENUS,
        menus
    }
}

// Add to cart
export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

// Delete product in cart
export const actRemoveInCart = product => {
    return {
        type: Types.DELETE_IN_CART,
        product
    }
}