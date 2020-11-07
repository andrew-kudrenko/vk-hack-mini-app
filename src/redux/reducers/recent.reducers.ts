import { IAction, IRecentState } from "../../interfaces/redux.interfaces"
import { ADD_TO_RECENT, REMOVE_FROM_RECENT, SET_RECENT_LOADING, SET_RECENT_LOADING_ERROR } from "../types/recent.types"

const initialState: IRecentState = { list: [], error: null, loading: false }

export const recentReducer = (state: IRecentState = initialState, { type, payload }: IAction): IRecentState => {
    switch (type) {
        case ADD_TO_RECENT: return { ...state, list: [payload, ...state.list] }
        case REMOVE_FROM_RECENT: return { ...state, list: state.list.filter(f => f.id !== payload) }
        case SET_RECENT_LOADING: return { ...state, loading: payload }
        case SET_RECENT_LOADING_ERROR: return { ...state, error: payload }
        default: return state
    }
}