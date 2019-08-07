import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
import jwt from 'jsonwebtoken';

// Call LocalStorage
var token = localStorage.getItem('userlogin') ? JSON.parse(localStorage.getItem('userlogin')).token : '';
var decode = jwt.decode(token);
var id = decode ? decode.id : '';
// console.log(decode.id);
var headers = {
    'fingerprint': '1',
    'token': `${token}`,
    'Content-Type': 'application/x-www-form-urlencoded'
};

// LOGIN
export const loginUser = user => {
    return {
        type: Types.LOGIN_USER,
        payload: user
    };
};
export const requestLoginUser = (phone, password, callback) => {
    return dispatch => {
        callApi('users/login', 'POST', { phone: `${phone}`, password: `${password}`, fingerprint: '1' }, null)
            .then(res => {
                // console.log("Res Data: ", res.data);
                if (res.status === 200 && res.statusText === 'OK') {
                    // alert("Đăng nhập thành công!");
                    localStorage.setItem("userlogin", JSON.stringify(res.data));
                    dispatch(loginUser(res.data));
                    callback();
                } else {
                    // console.log(res.errors);
                    alert("Đăng nhập sai!");
                }
            })
    };
};

// USER
export const actFetchUser = user => {
    return {
        type: Types.FETCH_USER,
        user
    }
}
export const actFetchUserRequest = () => {
    return dispatch => {
        callApi(`users/${id}`, 'GET', null, headers)
            .then(res => {
                // console.log(res.data)
                dispatch(actFetchUser(res.data))
            })
    }
}