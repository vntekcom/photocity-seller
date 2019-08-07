import * as Type from "../constants/ActionTypes";

var initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case Type.LOGIN_USER:
      // console.log(action.payload.token)
      const updateState = { ...state };
      updateState.token = action.payload.token;
      return updateState;

    case Type.FETCH_USER:
      state = action.user;
      return { ...state };
    default:
      return { ...state };
  }
};

export default user;
