import { Icon16Done } from '@vkontakte/icons'
import { Avatar, Snackbar } from '@vkontakte/vkui'
import React from 'react'
import { ISnackbarProps } from '../../interfaces/components.interfaces'

export const RegisterSnackbar: React.FC<ISnackbarProps> = ({ onClose }) =>
    <Snackbar
        layout="vertical"
        onClose={onClose}
        before={
            <Avatar size={24} style={{  backgroundColor: 'var(--accent)' }}>
                <Icon16Done fill="#fff" width={14} height={14} />
            </Avatar>
        }
    >
        Вы успешно зарегистрированы!
    </Snackbar>