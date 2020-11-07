import React, { ChangeEvent, useState } from 'react'
import { Button, FormLayout, FormLayoutGroup, Input, PanelHeader } from '@vkontakte/vkui'
import { createSetLoginLoadingAction, createSetLoginErrorAction } from '../../redux/actions/auth.actions'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../hooks/auth.hooks'
import { useNav } from '../../hooks/nav.hooks'
import { useRequest } from '../../hooks/request.hooks'
import { ErrorSnackbar } from '../../components/auth/ErrorSnackbar'

export const LoginPanel: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [snack, setSnack] = useState<React.ReactNode | null>(null)

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
            } else {
                throw new Error('Ошибка при входе')
            }
        } catch (e) {
            dispatch(createSetLoginErrorAction(String(e)))
            setSnack(<ErrorSnackbar onClose={setSnack.bind(null, null)} />)
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
                <Button
                    mode="primary"
                    size="xl"
                    onClick={submitHandler}
                    disabled={!username || !password}
                >
                    Войти
                    </Button>
                <Button
                    mode="outline"
                    size="xl"
                    onClick={jumpToRegister}
                >
                    Регистрация
                    </Button>
                {snack}
            </FormLayout>
        </>
    )
}