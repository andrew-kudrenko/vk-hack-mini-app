import { Action } from "redux"
import { PanelsIDType, IViewPanelMap, ViewsIDType } from "./navigation.interfaces"

export type ComponentIDType = string

export interface IAction<T = any> extends Action {
    payload?: T
}

export interface IViewsState extends IViewPanelMap {
    'profile-view': PanelsIDType, 
    'favorites-view': PanelsIDType,
    'recent-view': PanelsIDType,
    'search-view': PanelsIDType,
    activeView: ViewsIDType
}

export interface IState {
    views: IViewsState
}