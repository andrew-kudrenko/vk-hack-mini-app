import { Action } from "redux"
import { ICoach, IUser, UserRoleEnum } from "./entities.interfaces"
import { PanelsIDType, IViewPanelMap, ViewsIDType } from "./navigation.interfaces"

export type ComponentIDType = string

export type ErrorType = string | null

export type ThemeType = 'bright_light' | 'space_gray'

export interface IAction<T = any> extends Action {
    payload?: T
}

export interface IViewsState extends IViewPanelMap {
    'profile-view': PanelsIDType,
    'favorites-view': PanelsIDType,
    'recent-view': PanelsIDType,
    'search-view': PanelsIDType,
    'auth-view': PanelsIDType,
    activeView: ViewsIDType
}

export interface IThemeState {
    type: ThemeType
}

export interface IUserState {
    role: UserRoleEnum
    user: IUser | null
}

export interface IFavoritesState extends IStatePartial {
    list: Array<ICoach>
}

export interface IAuthState extends IStatePartial {
    token: string | null
    authorized: boolean,
}

export interface IStatePartial {
    error: string | null
    loading: boolean
}

export interface ICreateLoginActionParams {
    username: string
    token: string
}

export interface IRecentState extends IStatePartial {
    list: Array<ICoach>
}

export interface ICoachesState extends IStatePartial {
    list: Array<ICoach>
}

export interface IState {
    auth: IAuthState
    views: IViewsState
    theme: IThemeState
    user: IUserState
    favorites: IFavoritesState
    recent: IRecentState,
    coaches: ICoachesState
}