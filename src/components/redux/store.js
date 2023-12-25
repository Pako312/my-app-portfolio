import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import skillReducer from './skills/skill-card/reducer'
const rootReducer = combineReducers({
    skills:skillReducer,
    projects:[],
    experiences:[]
})

export const store=createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)
))
