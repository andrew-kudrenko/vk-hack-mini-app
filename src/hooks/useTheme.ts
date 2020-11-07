import { useDispatch, useSelector } from "react-redux";
import { IState, ThemeType } from "../interfaces/redux.interfaces";
import { setTheme } from "../redux/actions/theme.actions";

export function useTheme() {
    const dispatch = useDispatch()
    const { type } = useSelector((state: IState) => state.theme)

    const isDark = type === 'space_gray'

    function toggle() {
        if (!isDark) {
            dispatch(setTheme('space_gray'))
            apply('space_gray')
        } else {
            dispatch(setTheme('bright_light'))
            apply('bright_light')
        }
    }

    function apply(t: ThemeType) {
        document.body.setAttribute('scheme', t)
    }

    return { theme: type, toggle, isDark, apply }
}