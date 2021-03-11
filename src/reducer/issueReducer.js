import {
    ADD_ISSUE,
    VIEW_ISSUE,
    UPDATE_ISSUE,
    DELETE_ISSUE,
    VIEW_ONE_ISSUE
} from "../action/action.type";

const initialState = {
    issues: [],
    issue: null
}

const issueReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ISSUE:
            return {
                ...state,
                issues:[...state.issues, action.payload]
            }
        case VIEW_ISSUE:
            return {
                ...state,
                issues: action.payload
            }
        case VIEW_ONE_ISSUE:
            return {
                ...state,
                issue: action.payload
            }
        case UPDATE_ISSUE:
            return {
                ...state,
                issues: state.issues.map(issue => (
                    issue.id === action.payload.id ? action.payload : issue
                ))
            }
        case DELETE_ISSUE:
            return {
                ...state,
                issues: state.issues.filter(issue => (
                    issue.id !== action.payload
                ))
            }
        default:
            return state
    }

}

export default issueReducer