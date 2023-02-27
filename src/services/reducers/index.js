import LoginHeader from "./LoginHeader";
import getDeclaration from "./Declaration";
import GetLoginId from "./LoginId";
import {combineReducers} from "redux";

const reducer = combineReducers({LoginHeader, getDeclaration, GetLoginId});

export default reducer;