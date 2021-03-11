import { ADD_USER, GET_USER, LOG_OUT } from "../action/action.type";


const initialState = {
    user: null,
    isloggedin:false,
    loginFailed:false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            
            return {
                ...state,
                user: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
            case LOG_OUT:
                return {
                    ...state,                  
                    user:null
                }
        default:
            return state
    }
}

export default userReducer