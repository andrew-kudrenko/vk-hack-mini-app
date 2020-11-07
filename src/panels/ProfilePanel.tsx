import React from 'react'
import { Cell, Group, Header, PanelHeader, Switch } from '@vkontakte/vkui'
import { useTheme } from '../hooks/useTheme'

export const ProfilePanel: React.FC = () => {
    const { toggle, isDark } = useTheme()

    return (
        <>
            <PanelHeader>Профиль</PanelHeader>
            <Group header={<Header mode="secondary">Интерфейс</Header>}>
                <Cell asideContent={<Switch checked={isDark} onClick={toggle} />}>
                    Тёмная тема
                </Cell>
            </Group>
        </>
    )
}