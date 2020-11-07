import { ICategory } from "../../interfaces/entities.interfaces"
import { ErrorType, IAction } from "../../interfaces/redux.interfaces"
import { FETCH_CATEGORIES, SET_CATEGORIES_FETCHING, SET_CATEGORIES_FETCHING_ERROR } from "../types/categories.types"

export const fetchCategories = (payload: Array<ICategory>): IAction<Array<ICategory>> => ({ type: FETCH_CATEGORIES, payload })
export const setCategoriesFetching = (payload: boolean): IAction<boolean> => ({ type: SET_CATEGORIES_FETCHING, payload })
export const setCategoriesFetchingError = (payload: ErrorType): IAction<ErrorType> => ({ type: SET_CATEGORIES_FETCHING_ERROR, payload })