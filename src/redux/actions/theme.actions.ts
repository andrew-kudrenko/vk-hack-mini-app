import { IAction, ThemeType } from "../../interfaces/redux.interfaces"
import { SET_THEME } from "../types/theme.types"

export const setTheme = (payload: ThemeType): IAction<ThemeType> => ({ type: SET_THEME, payload })