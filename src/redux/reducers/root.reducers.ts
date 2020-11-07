import { combineReducers } from "redux"
import { viewsReducer } from "./views.reducers"

export const rootReducer = combineReducers({
    views: viewsReducer
})