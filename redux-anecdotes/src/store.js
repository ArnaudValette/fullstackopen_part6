import anecdotesReducer from "./reducers/anecdotesReducer"
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore } from "redux"
import { combineReducers } from "redux"
import { applyMiddleware } from "redux"
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from "./reducers/filterReducer"
import thunk from "redux-thunk"

const reducer = combineReducers({
    anecdotes : anecdotesReducer,
    notification : notificationReducer,
    filter: filterReducer
})
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)))


export default store