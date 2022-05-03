import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {ControlAccordion} from "./ControlAccordion";

export default {
    title: 'ControlAccordion',
    component:  ControlAccordion
}

const callback = action('click')

export const OnMode = () => <ControlAccordion callback={callback} title={'Menu1'} collapsed={false}/>
export const OffMode = () => <ControlAccordion callback={callback} title={'Menu1'} collapsed={true}/>

export const ChangeMode = () => {
    let [accordion, setAccordion] = useState(false)
    return <ControlAccordion callback={()=>setAccordion(!accordion)} title={'Menu1'} collapsed={accordion} />
}




