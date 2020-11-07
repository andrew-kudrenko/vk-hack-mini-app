import React, { ChangeEvent, useState } from 'react'
import { Input, PanelHeader, FormLayoutGroup, Button, FormLayout } from '@vkontakte/vkui'
import { useDispatch } from 'react-redux'
import { createSetLoginLoadingAction, createSetLoginErrorAction } from '../../redux/actions/auth.actions'
import { useNav } from '../../hooks/nav.hooks'
import { useRequest } from '../../hooks/request.hooks'
import { RegisterSnackbar } from '../../components/auth/RegisterSnackbar'
import { ErrorSnackbar } from '../../components/auth/ErrorSnackbar'

export const RegisterPanel: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [snack, setSnack] = useState<React.ReactNode | null>(null)

    const { requestJSON } = useRequest()
    const dispatch = useDispatch()
    const { jumpToPanel: jumpTo } = useNav()

    const onChangeHandler = (callback: (value: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
        callback(event.target.value)
    }

    const jumpToLogin = () => jumpTo('auth-view', 'login-panel')

    const submitHandler = async () => {
        try {
            dispatch(createSetLoginLoadingAction(true))
            const response = await requestJSON('/auth/register', 'POST', JSON.stringify({ email, password }))
            
            if (response.detail) {
                throw new Error('Ошибка при регистрации')
            }

            setSnack(<RegisterSnackbar onClose={setSnack.bind(null, null)} />)

            setTimeout(jumpToLogin, 2000)
        } catch (e) {
            dispatch(createSetLoginErrorAction(String(e)))
            setSnack(<ErrorSnackbar onClose={setSnack.bind(null, null)} />)
        } finally {
            dispatch(createSetLoginLoadingAction(false))
        }
    }

    return (
        <>
            <PanelHeader>Регистрация</PanelHeader>
            <FormLayout>
                <FormLayoutGroup>
                    <Input
                        type="email"
                        placeholder="Введите email"
                        value={email}
                        onChange={onChangeHandler(setEmail)}
                    />
                    <Input
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={onChangeHandler(setPassword)}
                    />
                    <Input
                        type="password"
                        placeholder="Повторите пароль"
                        value={passwordRepeat}
                        onChange={onChangeHandler(setPasswordRepeat)}
                    />
                </FormLayoutGroup>
                <Button 
                    size="xl" 
                    mode="commerce" 
                    onClick={submitHandler}
                    disabled={!email || !password.length || password !== passwordRepeat}
                >
                    Зарегистрироваться
                </Button>
                <Button 
                    size="xl"
                    mode="outline" 
                    onClick={jumpToLogin}
                >
                    Войти
                </Button>
            </FormLayout>
            {snack}
        </>
    )
}