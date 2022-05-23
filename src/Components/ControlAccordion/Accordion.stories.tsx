import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {ControlAccordion} from "./ControlAccordion";

export default {
    title: 'ControlAccordion',
    component:  ControlAccordion
}

const callback = action('click')
const callbackOnClick = action('click same title')

export const OnMode = () => <ControlAccordion
    callback={callback}
    title={'Menu1'}
    collapsed={false}
    items={[{title:'Alex', value: 3}, {title:'Sanya', value: 1}, {title:'Tim', value: 14}, {title:'Vadzim', value: 10}]}
    onClickHandler={callbackOnClick}
/>

export const OffMode = () => <ControlAccordion
    callback={callback}
    title={'Menu1'}
    collapsed={true}
    items={[{title:'Alex', value: 3}, {title:'Sanya', value: 1}, {title:'Tim', value: 14}, {title:'Vadzim', value: 10}]}
    onClickHandler={callbackOnClick}
/>

export const ChangeMode = () => {
    let [accordion, setAccordion] = useState(false)
    return <ControlAccordion
        callback={()=>setAccordion(!accordion)}
        title={'Menu1'}
        collapsed={accordion}
        items={[{title:'Alex', value: 3}, {title:'Sanya', value: 1}, {title:'Tim', value: 14}, {title:'Vadzim', value: 10}]}
        onClickHandler={callbackOnClick}
    />
}




