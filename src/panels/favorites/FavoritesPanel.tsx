import React from 'react'
import { PanelHeader } from '@vkontakte/vkui'
import { useSelector } from 'react-redux'
import { IState } from '../../interfaces/redux.interfaces'
import { FavoritesPlaceholder } from '../../components/favorites/FavoritesPlaceholder'

export const FavoritesPanel: React.FC = () => {
    const { list } = useSelector((state: IState) => state.favorites)

    return (
        <>
            <PanelHeader>Избранное</PanelHeader>
            {
                list.length
                ? list.length
                : <FavoritesPlaceholder />
            }
        </>
    )
}