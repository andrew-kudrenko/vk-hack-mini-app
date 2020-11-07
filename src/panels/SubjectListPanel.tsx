import React from 'react'
import { PanelHeader, Search, List, Cell, Group, Header } from '@vkontakte/vkui'
import { useDispatch } from 'react-redux'
import { setActivePanel } from '../redux/actions/views.actions'

export const SubjectListPanel: React.FC = () => {
    const dispatch = useDispatch()
    
    return (
        <>
            <PanelHeader>Выбрать предмет</PanelHeader>
            <Search placeholder="Введите название дисциплины" />
            <Group header={<Header mode="secondary">Языки</Header>}>
                <List>
                    <Cell expandable onClick={dispatch.bind(null, setActivePanel({ 'search-view': 'coach-list-panel'}))}>
                        Английский язык
                    </Cell>
                    <Cell expandable onClick={dispatch.bind(null, setActivePanel({ 'search-view': 'coach-list-panel'}))}>
                        Немецкий язык
                    </Cell>
                    <Cell expandable onClick={dispatch.bind(null, setActivePanel({ 'search-view': 'coach-list-panel'}))}>
                        Русский язык
                    </Cell>
                </List>
            </Group>
            <Group header={<Header mode="secondary">Естественные науки</Header>}>
                <List>
                <Cell expandable onClick={dispatch.bind(null, setActivePanel({ 'search-view': 'coach-list-panel'}))}>
                        Физика
                    </Cell>
                    <Cell expandable onClick={dispatch.bind(null, setActivePanel({ 'search-view': 'coach-list-panel'}))}>
                        Химия
                    </Cell>
                    <Cell expandable onClick={dispatch.bind(null, setActivePanel({ 'search-view': 'coach-list-panel'}))}>
                        Биология
                    </Cell>
                </List>
            </Group>
            <Group header={<Header mode="secondary">Математические дисциплины</Header>}>
                <List>
                <Cell expandable onClick={dispatch.bind(null, setActivePanel({ 'search-view': 'coach-list-panel'}))}>
                        Математика
                    </Cell>
                    <Cell expandable onClick={dispatch.bind(null, setActivePanel({ 'search-view': 'coach-list-panel'}))}>
                        Высшая математика
                    </Cell>
                    <Cell expandable onClick={dispatch.bind(null, setActivePanel({ 'search-view': 'coach-list-panel'}))}>
                        Теория вероятностей и математическая статистика
                    </Cell>
                </List>
            </Group>
        </>
    )
}