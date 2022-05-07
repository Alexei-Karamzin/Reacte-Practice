import {Story} from '@storybook/react';
import React, {useState} from 'react';
import {ControlRaiting, RaitingType} from "./ControlRaiting";

export default {
    title: 'new SB components/ControlRaiting',
    component: ControlRaiting,
    parameters: {
        layout: 'fullscreen',
    },
}

export type PropsType = {
    value: RaitingType
    callback: (value: RaitingType) => void
    title: string
    color?: string
}

const Template: Story<PropsType> = (args) => <ControlRaiting {...args}/>

export const Raiting = Template.bind({})

Raiting.args = {
    value: 0,
    callback: () => {
    },
    title: 'Control Raiting'
}

export const ChangeRaiting: Story<PropsType> = (args) => {
    const [raiting, setRaiting] = useState<RaitingType>(3)
    return <ControlRaiting {...args} callback={setRaiting} value={raiting}/>
}

ChangeRaiting.args = {
    title: 'Raiting 2'
}

/*export const EmptyRaiting = () => <ControlRaiting value={0} callback={x=>x}/>
export const Raiting1 = () => <ControlRaiting value={1} callback={x=>x}/>
export const Raiting2 = () => <ControlRaiting value={2} callback={x=>x}/>
export const Raiting3 = () => <ControlRaiting value={3} callback={x=>x}/>
export const Raiting4 = () => <ControlRaiting value={4} callback={x=>x}/>
export const Raiting5 = () => <ControlRaiting value={5} callback={x=>x}/>*/


