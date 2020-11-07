import { IAction, ICategoriesState } from "../../interfaces/redux.interfaces";
import { FETCH_CATEGORIES, SET_CATEGORIES_FETCHING, SET_CATEGORIES_FETCHING_ERROR } from "../types/categories.types";

const initialState: ICategoriesState = { error: null, loading: false, list: [] }

export const categoriesReducer = (state: ICategoriesState = initialState, { type, payload }: IAction): ICategoriesState => {
    switch (type) {
        case FETCH_CATEGORIES: return { ...state, list: payload }
        case SET_CATEGORIES_FETCHING: return { ...state, loading: payload }
        case SET_CATEGORIES_FETCHING_ERROR: return { ...state, error: payload }
        default: return state
    }
}