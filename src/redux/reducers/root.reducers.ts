import { combineReducers } from "redux"
import { authReducer } from "./auth.reducers"
import { categoriesReducer } from "./categories.reducers"
import { coachesReducer } from "./coaches.reducers"
import { favoritesReducer } from "./favorites.reducers"
import { recentReducer } from "./recent.reducers"
import { themeReducer } from "./theme.reducers"
import { userReducer } from "./user.reducers"
import { viewsReducer } from "./views.reducers"

export const rootReducer = combineReducers({
    views: viewsReducer,
    theme: themeReducer,
    favorites: favoritesReducer,
    recent: recentReducer,
    user: userReducer,
    coaches: coachesReducer,
    categories: categoriesReducer,
    auth: authReducer
})