export type NavHierarchyType = {
    'search-view': Array<SearchViewPanelsType>,
    'recent-view': Array<RecentViewPanelsType>,
    'favorites-view': Array<FavoritesViewPanelsType>,
    'profile-view': Array<ProfileViewPanelsType>,
    'auth-view': Array<AuthViewPanelsType>
}

export type ViewsIDType = 'search-view' | 'recent-view' | 'favorites-view' | 'profile-view' | 'auth-view'
export type PanelsIDType = SearchViewPanelsType | RecentViewPanelsType | FavoritesViewPanelsType | ProfileViewPanelsType | AuthViewPanelsType

export type SearchViewPanelsType = 'coach-list-panel' | 'subject-list-panel'
export type RecentViewPanelsType = 'recent-panel'
export type FavoritesViewPanelsType = 'favorites-panel'
export type ProfileViewPanelsType = 'profile-panel'
export type AuthViewPanelsType = 'login-panel' | 'register-panel'

export const NAV_HIERARCHY: NavHierarchyType = {
    'profile-view': ['profile-panel'],
    'favorites-view': ['favorites-panel'],
    'recent-view': ['recent-panel'],
    'search-view': ['coach-list-panel', 'subject-list-panel'],
    'auth-view': ['login-panel', 'register-panel']
}

export interface IViewPanelMap {
    [key: string]: PanelsIDType | ViewsIDType
}

export class ViewPanelMap {
    static create(view: ViewsIDType, panel: PanelsIDType): IViewPanelMap {
        return { [view]: panel }
    }
}