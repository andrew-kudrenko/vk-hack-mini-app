import { combineReducers } from "redux"
import { themeReducer } from "./theme.reducers"
import { viewsReducer } from "./views.reducers"

export const rootReducer = combineReducers({
    views: viewsReducer,
    theme: themeReducer
})