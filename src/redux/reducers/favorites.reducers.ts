import { IAction, IFavoritesState } from "../../interfaces/redux.interfaces"
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_FAVORITES_LOADING, SET_FAVORITES_LOADING_ERROR } from "../types/favorites.types"

const initialState: IFavoritesState = { list: [], error: null, loading: false }

export const favoritesReducer = (state: IFavoritesState = initialState, { type, payload }: IAction): IFavoritesState => {
    switch (type) {
        case ADD_TO_FAVORITES: return { ...state, list: [payload, ...state.list] }
        case REMOVE_FROM_FAVORITES: return { ...state, list: state.list.filter(f => f.id !== payload) }
        case SET_FAVORITES_LOADING: return { ...state, loading: payload }
        case SET_FAVORITES_LOADING_ERROR: return { ...state, error: payload }
        default: return state
    }
}