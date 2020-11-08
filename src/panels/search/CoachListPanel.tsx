import React, { useState } from 'react'
import { PanelHeader, PanelHeaderBack, Search } from '@vkontakte/vkui'
import { CoachCard } from '../../components/coaches/CoachCard'
import { useNav } from '../../hooks/nav.hooks'
import { FavoritesSnackbar } from '../../components/favorites/FavoritesSnackbar'

export const CoachListPanel: React.FC = () => {
    const [snack, setSnack] = useState<React.ReactNode | null>(null)
    const { jumpToPanel } = useNav()


    return (
        <>
            <PanelHeader
                left={<PanelHeaderBack />}
                onClick={() => jumpToPanel('search-view', 'subject-list-panel')}
            >
                Найти репетитора
            </PanelHeader>
            <Search />
            <CoachCard 
                onAddFavorite={setSnack.bind(
                    null,
                    <FavoritesSnackbar onActionClick={() => {}} onClose={setSnack.bind(null, null)} />, 
                    ''
                )} 
            />
            <CoachCard 
                onAddFavorite={setSnack.bind(
                    null,
                    <FavoritesSnackbar onActionClick={() => {}} onClose={setSnack.bind(null, null)} />, 
                    ''
                )} 
            />
            <CoachCard 
                onAddFavorite={setSnack.bind(
                    null,
                    <FavoritesSnackbar onActionClick={() => {}} onClose={setSnack.bind(null, null)} />, 
                    ''
                )} 
            />
            {snack}
        </>
    )
}