import { IAction, IThemeState, ThemeType } from "../../interfaces/redux.interfaces"
import { SET_THEME } from "../types/theme.types"

const initialState: IThemeState = { type: "bright_light" }

export const themeReducer = (state: IThemeState = initialState, { type, payload }: IAction<ThemeType>): IThemeState => {
    switch (type) {
        case SET_THEME: return { ...state, type: payload as ThemeType }
        default: return state
    }
}