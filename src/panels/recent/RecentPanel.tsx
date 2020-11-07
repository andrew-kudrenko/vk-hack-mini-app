import React from 'react'
import { PanelHeader } from '@vkontakte/vkui'
import { useSelector } from 'react-redux'
import { IState } from '../../interfaces/redux.interfaces'
import { RecentPlaceholder } from '../../components/recent/RecentPlaceholder'

export const RecentPanel: React.FC = () => {
    const { list } = useSelector((state: IState) => state.recent)

    return (
        <>
            <PanelHeader>Недавние</PanelHeader>
            {
                list.length
                ? list.length
                : <RecentPlaceholder />
            }
        </>
    )
}