import React, { useEffect } from 'react'
import '@vkontakte/vkui/dist/vkui.css'
import { Epic, View, Panel } from '@vkontakte/vkui'
import { connect, useDispatch } from 'react-redux'
import { setActiveView } from '../../redux/actions/views.actions'
import { Tabbar } from '../navigation/Tabbar'
import { CoachListPanel } from '../../panels/search/CoachListPanel'
import { RecentPanel } from '../../panels/recent/RecentPanel'
import { FavoritesPanel } from '../../panels/favorites/FavoritesPanel'
import { ProfilePanel } from '../../panels/profile/ProfilePanel'
import SubjectListPanel from '../../panels/search/SubjectListPanel'
import { useNav } from '../../hooks/nav.hooks'
import { LoginPanel } from '../../panels/auth/LoginPanel'
import { RegisterPanel } from '../../panels/auth/RegisterPanel'
import { useAuth } from '../../hooks/auth.hooks'
import { useAuthRequest } from '../../hooks/request.hooks'
import bridge from '@vkontakte/vk-bridge'
import { fetchCategories, setCategoriesFetchingError } from '../../redux/actions/categories.actions'

export const App: React.FC = () => {
  const dispatch = useDispatch()

  const { requestJSON } = useAuthRequest()
  const { activePanel, activeView, jumpToPanel: jumpTo } = useNav()
  const { authorized } = useAuth()

  const onStoryChange = (e: React.SyntheticEvent<HTMLElement>) => {
    const value = e.currentTarget.dataset['story']

    if (value) {
      dispatch(setActiveView(value))
    }
  }


  useEffect(() => {
    if (authorized) {
      jumpTo('search-view', 'subject-list-panel')
    } else {
      jumpTo('auth-view', 'login-panel')
    }

  }, [authorized])

  useEffect(() => {
    if (authorized) {
      requestJSON('/categories')
        .then(data => {
          dispatch(fetchCategories(data))
        })
        .catch((e) => {
          dispatch(setCategoriesFetchingError(e))
        })
    }
  }, [authorized])

  useEffect(() => {
    if (authorized) {
      requestJSON('/tutor')
        .then(data => {
          console.log(data)
          // dispatch(fetchCategories(data))
        })
        .catch((e) => {
          console.log(e)
          // dispatch(setCategoriesFetchingError(e))
        })
    }
  }, [authorized])

  useEffect(() => {
    bridge.send('VKWebAppInit', {})
  }, [authorized])

  return (
    <Epic
      activeStory={activeView}
      tabbar={authorized && <Tabbar activeView={activeView} onStoryChange={onStoryChange} />}
    >
      <View id="auth-view" activePanel={activePanel}>
        <Panel id="login-panel">
          <LoginPanel />
        </Panel>
        <Panel id="register-panel">
          <RegisterPanel />
        </Panel>
      </View>
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