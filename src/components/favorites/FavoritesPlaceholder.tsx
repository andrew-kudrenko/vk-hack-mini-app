import { Icon56FavoriteOutline } from '@vkontakte/icons'
import React from 'react'
import { Button, Placeholder } from '@vkontakte/vkui'
import { useNav } from '../../hooks/nav.hooks'

export const FavoritesPlaceholder: React.FC = () => {
    const { jumpToView } = useNav()

    return (
        <>
            <Placeholder
                icon={<Icon56FavoriteOutline />}
                header="Понравившееся"
                action={
                    <Button size="xl" onClick={jumpToView.bind(null, 'search-view')}>
                        Найти репетитора
                    </Button>
                }
            >
                Добавьте в избранное, чтобы не потерять
                из виду интересное предложение
          </Placeholder>
        </>
    )
}