import React, {useState} from 'react';
import { ControledOnOff} from './ControledOnOff'
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component:  ControledOnOff
}

const callback = action('click')

export const OnMode = () => <ControledOnOff state={true} callback={callback}/>
export const OffMode = () => <ControledOnOff state={false} callback={callback}/>

export const ChangeMode = () => {
    let [on, setOn] = useState(true)
    return <ControledOnOff state={on} callback={setOn} />
}




