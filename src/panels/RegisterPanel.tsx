import React, { ChangeEvent, useState } from 'react'
import { Input, PanelHeader, FormLayoutGroup, Div, Group, Header, Button, Text } from '@vkontakte/vkui'
import { useDispatch } from 'react-redux'
import { createSetLoginLoadingAction, createSetLoginErrorAction } from '../redux/actions/auth.actions'
import { request } from '../helpers/request.helpers'
import { useNav } from '../hooks/nav.hooks'

export const RegisterPanel: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const { jumpTo } = useNav()

    const onChangeHandler = (callback: (value: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
        callback(event.target.value)
    }

    const jumpToLogin = () => jumpTo('auth-view', 'login-panel')

    const submitHandler = async () => {
        try {
            dispatch(createSetLoginLoadingAction(true))
            await request('/auth/register', 'POST', JSON.stringify({ email, password }), 'json')
        } catch (e) {
            dispatch(createSetLoginErrorAction(String(e)))
        } finally {
            dispatch(createSetLoginLoadingAction(false))
        }
    }

    return (
        <Div>
            <PanelHeader>Регистрация</PanelHeader>
            <Group header={<Header>Давайте знакомиться!</Header>}>
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
                </FormLayoutGroup>
            </Group>
            <Text
                weight="medium"
                onClick={jumpToLogin}
            >
                Уже есть аккаунт? Войти
            </Text>
            <Button onClick={submitHandler}>
                Зарегистрироваться
            </Button>
        </Div>
    )
}