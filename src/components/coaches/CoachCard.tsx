import React from 'react'
import { Card, Title, Text, SimpleCell, Button, Counter } from '@vkontakte/vkui'
import { Icon28CoinsOutline, Icon28FavoriteOutline, Icon28LocationOutline, Icon28StudOutline, Icon28Write } from '@vkontakte/icons'

export const CoachCard: React.FC = () =>
    <Card size="l" mode="outline" style={{ margin: '1rem', marginTop: 0, padding: '1rem' }}>
        <Title weight="medium" level="2">Samantha</Title>
        <Text weight="regular" style={{ margin: '.5rem 0' }}>
            I'm a well coach. I know math and computer science. I'm best of the best
        </Text>

        <div style={{ margin: '0 -1rem' }}>
            <SimpleCell
                expandable
                before={<Icon28StudOutline />}
                after={<Counter>69</Counter>}
            >
                Количество студентов
            </SimpleCell>
            <SimpleCell
                expandable
                before={<Icon28FavoriteOutline />}
                after={<Counter>6.9</Counter>}
            >
                Рейтинг
            </SimpleCell>
            <SimpleCell
                expandable
                before={<Icon28CoinsOutline />}
                after={<Text weight="medium">690₽</Text>}
            >
                Стоимость занятия
            </SimpleCell>
            <SimpleCell
                expandable
                before={<Icon28LocationOutline />}
                after={<Text weight="medium">New York</Text>}
            >
                Город
            </SimpleCell>
        </div>

        <img
            src="https://yobte.ru/uploads/posts/2019-11/seksualnye-uchilki-37-foto-14.jpg"
            alt=""
            // height="250px"
            width="100%"
        />
        <div>
            <Button
                style={{margin: '.5rem 0'}}
                size="xl"
                after={<Icon28FavoriteOutline />}
            >
                В избранное
            </Button>
            <Button
                size="xl"
                mode="commerce"
                after={<Icon28Write />}
            >
                Начать диалог
            </Button>
        </div>
    </Card>