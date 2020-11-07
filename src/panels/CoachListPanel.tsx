import React from 'react'
import { PanelHeader, PanelHeaderBack, Search } from '@vkontakte/vkui'
import { CoachCard } from '../components/coaches/CoachCard'
import { useDispatch } from 'react-redux'
import { setActivePanel } from '../redux/actions/views.actions'
import { IViewPanelMap, ViewPanelMap } from '../interfaces/navigation.interfaces'

export const CoachListPanel: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <>
            <PanelHeader
                left={<PanelHeaderBack />}
                onClick={dispatch.bind(null, setActivePanel(ViewPanelMap.create('search-view', 'subject-list-panel')))}
            >
                Найти репетитора
            </PanelHeader>
            <Search />
            <CoachCard />
            <CoachCard />
            <CoachCard />
            <CoachCard />
        </>
    )
}