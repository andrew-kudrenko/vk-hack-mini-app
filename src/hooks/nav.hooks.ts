import { useDispatch, useSelector } from "react-redux"
import { PanelsIDType, ViewPanelMap, ViewsIDType } from "../interfaces/navigation.interfaces"
import { IState } from "../interfaces/redux.interfaces"
import { setActivePanel, setActiveView } from "../redux/actions/views.actions"

export function useNav() {
    const dispatch = useDispatch()
    const { activeView, ...views } = useSelector((state: IState) => state.views)

    let activePanel

    for (let v in views) {
        if (v === activeView) {
            activePanel = views[v]
        }
    }

    function jumpToPanel(view: ViewsIDType, panel: PanelsIDType) {
        jumpToView(view)
        dispatch(setActivePanel(ViewPanelMap.create(view, panel)))
    }

    function jumpToView(view: ViewsIDType) {
        dispatch(setActiveView(view))
    }

    return { activeView, activePanel, jumpToPanel, jumpToView }
}