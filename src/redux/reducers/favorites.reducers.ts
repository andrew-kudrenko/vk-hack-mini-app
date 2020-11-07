import { IAction, IFavoritesState } from "../../interfaces/redux.interfaces"
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../types/favorites.types"

const initialState: IFavoritesState = { list: [] }

export const favoritesReducer = (state: IFavoritesState = initialState, { type, payload }: IAction): IFavoritesState => {
    switch (type) {
        case ADD_TO_FAVORITES: return { ...state, list: [payload, ...state.list] }
        case REMOVE_FROM_FAVORITES: return { ...state, list: state.list.filter(f => f.id !== payload) }
        default: return state
    }
}