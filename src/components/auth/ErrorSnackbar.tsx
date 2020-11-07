import React from 'react'
import { Icon16ErrorCircle } from '@vkontakte/icons'
import { Avatar, Snackbar } from '@vkontakte/vkui'
import { ISnackbarProps } from '../../interfaces/components.interfaces'

export const ErrorSnackbar: React.FC<ISnackbarProps> = ({ onClose }) =>
    <Snackbar
        layout="vertical"
        onClose={onClose}
        before={
            <Avatar size={24} style={{  backgroundColor: 'var(--destructive)' }}>
                <Icon16ErrorCircle fill="#fff" width={14} height={14} />
            </Avatar>
        }
    >
        Произошла ошибка!
    </Snackbar>