import React, {useState} from 'react';
import {ControlRaiting, RaitingType} from "./ControlRaiting";

export default {
    title: 'Raiting',
    component: ControlRaiting,
    parameters: {
        layout: 'fullscreen',
    },
}

export const EmptyRaiting = () => <ControlRaiting value={0} callback={x=>x}/>
export const Raiting1 = () => <ControlRaiting value={1} callback={x=>x}/>
export const Raiting2 = () => <ControlRaiting value={2} callback={x=>x}/>
export const Raiting3 = () => <ControlRaiting value={3} callback={x=>x}/>
export const Raiting4 = () => <ControlRaiting value={4} callback={x=>x}/>
export const Raiting5 = () => <ControlRaiting value={5} callback={x=>x}/>

export const ChangeRaiting = () => {
    const [raiting, setRaiting] = useState<RaitingType>(3)
    return <ControlRaiting callback={setRaiting} value={raiting} />
}
