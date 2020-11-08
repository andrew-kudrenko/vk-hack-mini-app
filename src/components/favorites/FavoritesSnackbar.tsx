import { Icon24Favorite } from '@vkontakte/icons'
import { Snackbar, Avatar } from '@vkontakte/vkui'
import React from 'react'
import { IFavoritesSnackbarProps } from '../../interfaces/components.interfaces'

export const FavoritesSnackbar: React.FC<IFavoritesSnackbarProps> = ({ onActionClick, onClose }) =>
    <Snackbar
        onClose={onClose}
        action="Мои закладки"
        onActionClick={onActionClick}
        before={
            <Avatar 
                size={24} 
                style={{ backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)' }}
            >
                <Icon24Favorite fill="#fff" width={14} height={14} />
            </Avatar>}
    >
        Сохранено в закладки
    </Snackbar>