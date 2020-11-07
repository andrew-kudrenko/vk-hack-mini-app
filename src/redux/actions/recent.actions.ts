import { EntityIDType, ICoach } from "../../interfaces/entities.interfaces"
import { ErrorType, IAction } from "../../interfaces/redux.interfaces"
import { ADD_TO_RECENT, REMOVE_FROM_RECENT, SET_RECENT_LOADING, SET_RECENT_LOADING_ERROR } from "../types/recent.types"

export const addToRecent = (payload: ICoach): IAction<ICoach> => ({ type: ADD_TO_RECENT, payload })
export const removeFromRecent = (payload: EntityIDType): IAction<EntityIDType> => ({ type: REMOVE_FROM_RECENT, payload })

export const setRecentLoading = (payload: boolean): IAction<boolean> => ({ type: SET_RECENT_LOADING, payload })
export const setRecentError = (payload: ErrorType): IAction<ErrorType> => ({ type: SET_RECENT_LOADING_ERROR, payload })