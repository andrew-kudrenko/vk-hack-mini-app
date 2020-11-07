import React from 'react'
import { Cell, Group, Header, PanelHeader, Switch, Button, CellButton } from '@vkontakte/vkui'
import { useTheme } from '../../hooks/theme.hooks'
import { useAuth } from '../../hooks/auth.hooks'

export const ProfilePanel: React.FC = () => {
    const { toggle, isDark } = useTheme()
    const { logout } = useAuth()

    return (
        <>
            <PanelHeader>Профиль</PanelHeader>
            <Group header={<Header mode="secondary">Интерфейс</Header>}>
                <Cell asideContent={<Switch checked={isDark} onClick={toggle} />}>
                    Тёмная тема
                </Cell>
                <Group header={<Header mode="secondary">Аккаунт</Header>}>
                    <CellButton mode="danger" onClick={logout}>
                        Выйти
                    </CellButton>
                </Group>
            </Group>
        </>
    )
}