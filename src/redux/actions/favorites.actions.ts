import { EntityIDType, ICoach } from "../../interfaces/entities.interfaces"
import { IAction } from "../../interfaces/redux.interfaces"
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../types/favorites.types"

export const addToFavorites = (payload: ICoach): IAction<ICoach> => ({ type: ADD_TO_FAVORITES, payload })
export const removeFromFavorites = (payload: EntityIDType): IAction<EntityIDType> => ({ type: REMOVE_FROM_FAVORITES, payload })