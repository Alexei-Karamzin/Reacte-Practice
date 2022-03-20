import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import { Accordion } from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
    parameters: {
        layout: 'fullscreen',
    },
}


/*export const Accordion = () => <Accordion title={'dsds'} onChange={'dsds'}/>*/


/*export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <OnOff on={value} onChange={setValue()} />
}*/



