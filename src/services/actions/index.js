import { GET_DECLARATION, LOGIN_USER, GET_LOGIN_ID } from "../constants/actionType"
export const act_login_header = (status) => {
    return {
        type: LOGIN_USER,
        payload: status
    }
}

export const act_get_login_id = (id) => {
    return {
        type: GET_LOGIN_ID,
        payload: id
    }
}
export const act_get_declaration = (data) => {
    return {
        type: GET_DECLARATION,
        payload: data
    }
}
