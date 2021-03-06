import { EntityIDType } from "./entities.interfaces";
import { ComponentIDType } from "./redux.interfaces"

export interface ITabbarProps {
    activeView: ComponentIDType
    onStoryChange: (event: React.SyntheticEvent<HTMLElement>) => void
}

export interface IFavoritesSnackbarProps {
    onClose: () => void
    onActionClick: () => void
}

export interface ISnackbarProps {
    onClose: () => void
}

export interface ICoachCardProps {
    onAddFavorite: (() => Promise<void>) | (() => void)
}