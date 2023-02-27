import * as types from "../constants/actionType";
import { addUserID } from "../userIdServices";

let initialValues = "";
const GetLoginId = (state = initialValues, action) => {
  switch (action.type) {
    case types.GET_LOGIN_ID:
      state = action.payload
      addUserID({userID: state}).then((err) => {
        console.log(err);
      })
      return state;
    default:
      return state;
  }
};

export default GetLoginId;
