import * as types from "../constants/actionType";
import { addHealth } from "../healthServices";

let initialValues = "";
const getDeclaration = (state = initialValues, action) => {
  switch (action.type) {
    case types.GET_DECLARATION:
      state = action.payload
      addHealth(state) .then((err)=>{console.log(err)})
      return state;
    default:
      return state;
  }
};

export default getDeclaration; 