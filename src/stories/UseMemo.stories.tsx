import React, {useMemo, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

const UseMemo = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(5)

    let resA = 1
    let resB = 1

    resA = useMemo(() => {
        let tempResA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 1
            while (fake<10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResA *= i
        }
        return tempResA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resB *= i
    }

    return <div>
        <input value={a} onChange={e => {
            setA(Number(e.currentTarget.value))
        }}/>
        <input value={b} onChange={e => {
            setB(+e.currentTarget.value)
        }}/>

        <div>
            Result a: {resA}
        </div>
        <div>
            Result b: {resB}
        </div>
    </div>
}

export default {
    title: 'Control Element/useMemo demo',
    component: UseMemo,
    args: {}
} as ComponentMeta<typeof UseMemo>;

const Template: ComponentStory<typeof UseMemo> = (args) => <UseMemo /*{...args}*//>;

export const ControlSelectStory = Template.bind({});

ControlSelectStory.args = {};
