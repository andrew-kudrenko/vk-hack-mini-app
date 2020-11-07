import { combineReducers } from "redux"
import { authReducer } from "./auth.reducers"
import { favoritesReducer } from "./favorites.reducers"
import { themeReducer } from "./theme.reducers"
import { userReducer } from "./user.reducers"
import { viewsReducer } from "./views.reducers"

export const rootReducer = combineReducers({
    views: viewsReducer,
    theme: themeReducer,
    favorites: favoritesReducer,
    user: userReducer,
    auth: authReducer
})