import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

//Fetch IMEI
export const actFetchIMEIRequest = (imei) => {
    return dispatch => {
        return callApi('imei', 'POST', null).then(res => {
            dispatch(actFetchIMEI(res.data))
        })
    }
}

export const actFetchIMEI = imei => {
    return {
        type: Types.FETCH_IMEI,
        imei
    }
}