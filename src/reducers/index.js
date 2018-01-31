import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import todos from "./todoReducer";

const rootReducer = combineReducers({
    todos,
    routing: routerReducer
});

export default rootReducer;