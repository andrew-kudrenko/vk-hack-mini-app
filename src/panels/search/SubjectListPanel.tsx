import React from 'react'
import { PanelHeader, Search, List, Cell, Group, Header, PanelSpinner } from '@vkontakte/vkui'
import { useNav } from '../../hooks/nav.hooks'
import { connect, useSelector } from 'react-redux'
import { IState } from '../../interfaces/redux.interfaces'

export const SubjectListPanel: React.FC = () => {
    const { error, list, loading } = useSelector((state: IState) => state.categories)
    const { jumpToPanel } = useNav()

    const onClickHandler = jumpToPanel.bind(null, 'search-view', 'coach-list-panel')
    console.log(list)
    return (
        <>
            <PanelHeader>Выбрать предмет</PanelHeader>
            <Search placeholder="Введите название дисциплины" />
            {
                loading
                ? <PanelSpinner />
                : error
                    ? error
                    : list.length && list.map(c => 
                        <Group key={c.id} header={<Header mode="secondary">{c.title}</Header>}>
                            <List>
                                {
                                    c.categories?.length && c.categories.map(s => 
                                        <Cell key={s.id} expandable onClick={onClickHandler}>
                                           {s.title} 
                                        </Cell>
                                    )
                                }
                            </List>
                        </Group>            
                    )
            }
        </>
    )
}

export default connect()(SubjectListPanel)