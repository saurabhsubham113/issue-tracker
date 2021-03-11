import { createStore, applyMiddleware, combineReducers } from 'redux';
import Thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import issueReducer from "../reducer/issueReducer";
import userReducer from "../reducer/userReducer";


const rootReducer = combineReducers({ issues: issueReducer, users: userReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)))

export default store;

