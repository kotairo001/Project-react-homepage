import * as types from "../constants/actionType";

let initialValues = "";
const LoginHeader = (state = initialValues, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      state = action.payload
      return state;
    default:
      return state;
  }
};

export default LoginHeader;
