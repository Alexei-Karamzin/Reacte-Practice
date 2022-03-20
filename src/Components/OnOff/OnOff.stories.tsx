import React, {useState} from 'react';
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
    parameters: {
        layout: 'fullscreen',
    },
}

/*export const OnOff = () => <OnOff />
export const OnOff = () => <OnOff on={false} onChange={x=>x}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <OnOff on={value} onChange={setValue()} />
}*/



