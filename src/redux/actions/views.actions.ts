import { IViewPanelMap } from "../../interfaces/navigation.interfaces"
import { IAction, ComponentIDType } from "../../interfaces/redux.interfaces"
import { SET_ACTIVE_PANEL, SET_ACTIVE_VIEW } from "../types/views.types"

export const setActiveView = (payload: ComponentIDType): IAction<ComponentIDType> => ({ type: SET_ACTIVE_VIEW, payload })
export const setActivePanel = (payload: IViewPanelMap): IAction<IViewPanelMap> => ({ type: SET_ACTIVE_PANEL, payload })