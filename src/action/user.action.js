import { ADD_USER, GET_USER,LOG_OUT } from "./action.type";

import UserData from "../axios/UserData";
import { toast } from "react-toastify";

export const addUser = user => async dispatch => {
    const res = await UserData.postUser(user)

    dispatch({
        type: ADD_USER,
        payload: res
    })
}
export const getUser = (email, password) => async dispatch => {
    const res = await UserData.getUser(email, password)

    if (res.length !== 0) {
        toast(`welcome ${res[0].firstName}`,{
            type:"success"
        })
        dispatch({
            type: GET_USER,
            payload: res[0]
        })
    } else {
        toast("invalid email or password",{
            type:"error"
        })
    }
}

export const logOut = () => dispatch => {
    dispatch({
        type:LOG_OUT,
        payload:null
    })
}