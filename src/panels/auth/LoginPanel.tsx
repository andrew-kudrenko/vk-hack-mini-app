import React, { ChangeEvent, useState } from 'react'
import { Button, FormLayout, FormLayoutGroup, Input, PanelHeader, Text } from '@vkontakte/vkui'
import { createSetLoginLoadingAction, createSetLoginErrorAction } from '../../redux/actions/auth.actions'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../hooks/auth.hooks'
import { useNav } from '../../hooks/nav.hooks'
import { useRequest } from '../../hooks/request.hooks'

export const LoginPanel: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const { login } = useAuth()
    const { jumpToPanel } = useNav()
    const { requestFormData } = useRequest()

    const onChangeHandler = (callback: (value: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
        callback(event.target.value)
    }

    const jumpToRegister = () => jumpToPanel('auth-view', 'register-panel')

    const submitHandler = async () => {
        try {
          dispatch(createSetLoginLoadingAction(true))
          const response = await requestFormData('/auth/jwt/login', 'POST', `username=${username}&password=${password}`)
          const token = response['access_token']
          if (token) {
            login({ username, token })
          }
        } catch (e) {
          dispatch(createSetLoginErrorAction(String(e)))
        } finally {
          dispatch(createSetLoginLoadingAction(false))
        }
      }

    return (
        <>
            <PanelHeader>Вход</PanelHeader>
            <FormLayout>
                <FormLayoutGroup top="Логин">
                    <Input 
                        type="text" 
                        value={username} 
                        onChange={onChangeHandler(setUsername)}
                    />
                </FormLayoutGroup>
                <FormLayoutGroup top="Пароль">
                    <Input 
                        type="password" 
                        value={password} 
                        onChange={onChangeHandler(setPassword)}
                    />
                </FormLayoutGroup>
                <Text 
                    weight="medium"
                    onClick={jumpToRegister}
                >
                    Ещё нет аккаунта? Зарегистрируйтесь
                </Text>
                <Button 
                    mode="primary" 
                    size="xl" 
                    onClick={submitHandler}
                >
                    Войти
                </Button>
            </FormLayout>
        </>
    )
}