import { EntityIDType, ICoach } from "../../interfaces/entities.interfaces"
import { ErrorType, IAction } from "../../interfaces/redux.interfaces"
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_FAVORITES_LOADING, SET_FAVORITES_LOADING_ERROR } from "../types/favorites.types"

export const addToFavorites = (payload: ICoach): IAction<ICoach> => ({ type: ADD_TO_FAVORITES, payload })
export const removeFromFavorites = (payload: EntityIDType): IAction<EntityIDType> => ({ type: REMOVE_FROM_FAVORITES, payload })

export const setFavoritesLoading = (payload: boolean): IAction<boolean> => ({ type: SET_FAVORITES_LOADING, payload })
export const setFavoritesError = (payload: ErrorType): IAction<ErrorType> => ({ type: SET_FAVORITES_LOADING_ERROR, payload })