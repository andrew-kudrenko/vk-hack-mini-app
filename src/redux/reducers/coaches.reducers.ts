import { IAction, ICoachesState } from "../../interfaces/redux.interfaces";
import { FETCH_COACHES, SET_COACHES_FETCHING, SET_COACHES_FETCHING_ERROR } from "../types/coaches.types";

const initialState: ICoachesState = { error: null, loading: false, list: [] }

export const coachesReducer = (state: ICoachesState = initialState, { type, payload }: IAction): ICoachesState => {
    switch (type) {
        case FETCH_COACHES: return { ...state, list: payload }
        case SET_COACHES_FETCHING: return { ...state, loading: payload }
        case SET_COACHES_FETCHING_ERROR: return { ...state, error: payload }
        default: return state
    }
}