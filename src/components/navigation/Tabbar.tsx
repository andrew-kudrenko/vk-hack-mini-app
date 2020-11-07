import React from 'react'
import { Tabbar as VKTabar, TabbarItem } from '@vkontakte/vkui'
import { ITabbarProps } from '../../interfaces/components.interfaces'
import { Icon28EmployeeOutline, Icon28HistoryBackwardOutline, Icon28FavoriteOutline, Icon28UserCircleOutline } from '@vkontakte/icons'

export const Tabbar: React.FC<ITabbarProps> = ({ activeView, onStoryChange }) =>
    <VKTabar>
        <TabbarItem
            onClick={onStoryChange}
            selected={activeView === 'search-view'}
            data-story="search-view"
            text="Репетиторы"
        >
            <Icon28EmployeeOutline />
        </TabbarItem>
        <TabbarItem
            onClick={onStoryChange}
            selected={activeView === 'recent-view'}
            data-story="recent-view"
            text="Недавние"
        >
            <Icon28HistoryBackwardOutline />
        </TabbarItem>
        <TabbarItem
            onClick={onStoryChange}
            selected={activeView === 'favorites-view'}
            data-story="favorites-view"
            text="Избранное"
        >
            <Icon28FavoriteOutline />
        </TabbarItem>
        <TabbarItem
            onClick={onStoryChange}
            selected={activeView === 'profile-view'}
            data-story="profile-view"
            text="Профиль"
        >
            <Icon28UserCircleOutline />
        </TabbarItem>
    </VKTabar>