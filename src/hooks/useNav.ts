import { useSelector } from "react-redux"
import { IState } from "../interfaces/redux.interfaces"

export function useNav() {
    const { activeView, ...views } = useSelector((state: IState) => state.views)

    let activePanel

    for (let v in views) {
        if (v === activeView) {
            activePanel = views[v]
        }
    }

    return { activeView, activePanel }
}