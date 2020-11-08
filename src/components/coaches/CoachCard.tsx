import React from 'react'
import { Card, Title, Text, Button, Counter, Div } from '@vkontakte/vkui'
import { Icon16MoneyCircle, Icon16Place, Icon16StarCircleFillYellow, Icon16Users, Icon28FavoriteOutline, Icon28Write } from '@vkontakte/icons'

export const CoachCard: React.FC = () =>
    <Card
        size="l"
        mode="outline"
        style={{ display: 'flex', margin: '1rem', marginTop: 0 }}
    >
        <div style={{ display: 'flex', padding: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Title weight="medium" level="2">Имя Фамилия Отчество</Title>
                <Text weight="regular" style={{ margin: '.5rem 0' }}>
                    I'm a well coach. I know math and computer science. I'm best of the best
            </Text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Button
                    mode="tertiary"
                    before={<Icon16Users />}
                    after={<Counter>228</Counter>}
                />
                <Button
                    mode="tertiary"
                    before={<Icon16StarCircleFillYellow />}
                    after={<Counter>6.9</Counter>}
                />
                <Button
                    mode="tertiary"
                    before={<Icon16MoneyCircle />}
                    after={<Text weight="medium">690₽</Text>}
                />
                <Button
                    mode="tertiary"
                    before={<Icon16Place />}
                    after={<Text weight="medium">New York</Text>}
                />
            </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem', margin: '-1.5rem 0 -.5rem' }}>
            <Button style={{ margin: '.25rem' }} mode="overlay_outline">Биология</Button>
            <Button style={{ margin: '.25rem' }} mode="overlay_outline">Химия</Button>
            <Button style={{ margin: '.25rem' }} mode="overlay_outline">Физика</Button>
        </div>
        <Div>
            <img
                src="https://avatars.mds.yandex.net/get-zen_doc/1860870/pub_5dfe3dc6aad43600aefe80e5_5dfe43461e8e3f00b0e55c67/scale_1200"
                alt=""
                // height="250px"
                width="100%"
            />
            <Button
                style={{ margin: '.5rem 0' }}
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
        </Div>
    </Card>