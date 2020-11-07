import { ICoach } from "../../interfaces/entities.interfaces"
import { ErrorType, IAction } from "../../interfaces/redux.interfaces"
import { FETCH_COACHES, SET_COACHES_FETCHING, SET_COACHES_FETCHING_ERROR } from "../types/coaches.types"

export const fetchCoaches = (payload: Array<ICoach>): IAction<Array<ICoach>> => ({ type: FETCH_COACHES, payload })
export const setCoachesFetching = (payload: boolean): IAction<boolean> => ({ type: SET_COACHES_FETCHING, payload })
export const setCoachesFetchingError = (payload: ErrorType): IAction<ErrorType> => ({ type: SET_COACHES_FETCHING_ERROR, payload })