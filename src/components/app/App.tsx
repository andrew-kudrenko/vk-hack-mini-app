import React from 'react'
import '@vkontakte/vkui/dist/vkui.css'
import { Epic, View, Panel } from '@vkontakte/vkui'
import { connect, useDispatch } from 'react-redux'
import { setActiveView } from '../../redux/actions/views.actions'
import { Tabbar } from '../navigation/Tabbar'
import { CoachListPanel } from '../../panels/CoachListPanel'
import { RecentPanel } from '../../panels/RecentPanel'
import { FavoritesPanel } from '../../panels/FavoritesPanel'
import { ProfilePanel } from '../../panels/ProfilePanel'
import { SubjectListPanel } from '../../panels/SubjectListPanel'
import { useNav } from '../../hooks/useNav'

export const App: React.FC = () => {
  const dispatch = useDispatch()
  const { activePanel, activeView } = useNav()

  const onStoryChange = (e: React.SyntheticEvent<HTMLElement>) => {
    const value = e.currentTarget.dataset['story']

    if (value) {
      dispatch(setActiveView(value))
    }
  }

  return (
    <Epic 
      activeStory={activeView} 
      tabbar={<Tabbar activeView={activeView} onStoryChange={onStoryChange} />}
    >
      <View id="search-view" activePanel={activePanel}>
        <Panel id="coach-list-panel">
          <CoachListPanel />
        </Panel>
        <Panel id="subject-list-panel">
          <SubjectListPanel />
        </Panel>
      </View>
      <View id="recent-view" activePanel={activePanel}>
        <Panel id="recent-panel">
          <RecentPanel />
        </Panel>
      </View>
      <View id="favorites-view" activePanel={activePanel}>
        <Panel id="favorites-panel">
          <FavoritesPanel />
        </Panel>
      </View>
      <View id="profile-view" activePanel={activePanel}>
        <Panel id="profile-panel">
          <ProfilePanel />
        </Panel>
      </View>
    </Epic>
  )
}

export default connect()(App)