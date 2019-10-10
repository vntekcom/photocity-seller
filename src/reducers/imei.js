import * as Types from './../constants/ActionTypes';

var initialState = [
    // {
    //     "alert": "Official delivery from ZHIYUN TECH",
    //     "imei": "76F09C054010414",
    //     "product": "CRANE 3 LAB",
    //     "ordernumber": "1570615429488",
    //     "date": "2019-10-08T17:00:00.000Z",
    //     "code": "GZC3L"
    // }
];

const imei = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_IMEI:
            state = action.imei;
            return [...state]
        default:
            return [...state]
    }
};

export default imei;