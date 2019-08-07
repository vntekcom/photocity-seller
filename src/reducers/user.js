import * as Type from "../constants/ActionTypes";

var initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case Type.LOGIN_USER:
      state = action.payload;
      return { ...state };

    case Type.FETCH_USER:
      state = action.user;
      return { ...state };

    default:
      return { ...state };
  }
};

export default user;
