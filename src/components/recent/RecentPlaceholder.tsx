import { Icon56RecentOutline } from '@vkontakte/icons'
import React from 'react'
import { Button, Placeholder } from '@vkontakte/vkui'
import { useNav } from '../../hooks/nav.hooks'

export const RecentPlaceholder: React.FC = () => {
    const { jumpToView } = useNav()

    return (
        <>
            <Placeholder
                icon={<Icon56RecentOutline />}
                header="Недавние"
                action={
                    <Button size="xl" onClick={jumpToView.bind(null, 'search-view')}>
                        Найти интересное предложение
                    </Button>
                }
            >
                Здесь находится история просмотров
          </Placeholder>
        </>
    )
}