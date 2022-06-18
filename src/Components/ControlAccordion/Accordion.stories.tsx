import React from 'react';
import {action} from "@storybook/addon-actions";
import {ControlAccordion} from "./ControlAccordion";

export default {
    title: 'ControlAccordion',
    component:  ControlAccordion
}

const callbackOnClick = action('click same title')

export const OnMode = () => <ControlAccordion
    title={'Menu1'}
    items={[{title:'Alex', value: 3}, {title:'Sanya', value: 1}, {title:'Tim', value: 14}, {title:'Vadzim', value: 10}]}
    onClickHandler={callbackOnClick}
/>

export const ChangeMode = () => {

    //let [accordion, setAccordion] = useState(false)
    return <ControlAccordion
        title={'Menu1'}
        items={[{title:'Alex', value: 3}, {title:'Sanya', value: 1}, {title:'Tim', value: 14}, {title:'Vadzim', value: 10}]}
        onClickHandler={callbackOnClick}
    />
}




