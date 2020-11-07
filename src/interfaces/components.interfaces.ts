import { ComponentIDType } from "./redux.interfaces"

export interface ITabbarProps {
    activeView: ComponentIDType
    onStoryChange: (event: React.SyntheticEvent<HTMLElement>) => void
}