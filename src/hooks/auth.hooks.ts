import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState, ICreateLoginActionParams } from '../interfaces/redux.interfaces'
import { createLoginAction, createLogoutAction } from '../redux/actions/auth.actions'

export function useAuth() {
  const dispatch = useDispatch()
  const { authorized, token } = useSelector((state: IState) => state.auth)

  const login = useCallback((loginParams: ICreateLoginActionParams) => {
    dispatch(createLoginAction(loginParams))
    localStorage.setItem('user-data', JSON.stringify({ username: loginParams.username, token }))
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('user-data')
    dispatch(createLogoutAction())
  }, [])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user-data') || 'null')

    if (userData?.token) {
      login(userData)
    }
  }, [login])

  return { authorized, token, login, logout }
}