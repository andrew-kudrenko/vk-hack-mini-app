import React from 'react'
import { Cell, FormLayout, Group, Header, PanelHeader, Switch, File } from '@vkontakte/vkui'
import { useTheme } from '../hooks/theme.hooks'
import { Icon24Camera } from '@vkontakte/icons'

export const ProfilePanel: React.FC = () => {
    const { toggle, isDark } = useTheme()

    return (
        <>
            <PanelHeader>Профиль</PanelHeader>
            <Group header={<Header mode="secondary">Интерфейс</Header>}>
                <Cell asideContent={<Switch checked={isDark} onClick={toggle} />}>
                    Тёмная тема
                </Cell>
                <FormLayout>
                    <File 
                        title="Загрузите Ваше фото"
                        // before={<Icon24Camera />} 
                        // controlSize="xl"
                    >
                        Открыть галерею
                    </File>
                </FormLayout>
            </Group>
        </>
    )
}