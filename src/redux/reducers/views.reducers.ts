import { IAction, IViewsState } from "../../interfaces/redux.interfaces"
import { SET_ACTIVE_PANEL, SET_ACTIVE_VIEW } from "../types/views.types"

const initialState: IViewsState = {
    'profile-view': 'profile-panel',
    'favorites-view': 'favorites-panel',
    'recent-view': 'recent-panel',
    'search-view': 'subject-list-panel',
    activeView: 'profile-view'
}

export const viewsReducer = (state: IViewsState = initialState, { type, payload }: IAction): IViewsState => {
    switch (type) {
        case SET_ACTIVE_PANEL: return { ...state, ...payload }
        case SET_ACTIVE_VIEW: return { ...state, activeView: payload }
        default: return state
    }
}