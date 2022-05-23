import React, {useState} from 'react';
import './App.css';
import {Accordion} from './Components/Accordion/Accordion';
import {Raiting} from "./Components/Raiting/Raiting";
import {OnOff} from "./Components/OnOff/OnOff";
import {ControlRaiting, RaitingType} from "./Components/ControlRaiting/ControlRaiting";
import {ControlAccordion} from "./Components/ControlAccordion/ControlAccordion";
import {ControledOnOff} from "./Components/ControledOnOff/ControledOnOff";
import ContainerControlInput from "./Components/ControlInput/ContainerControlInput";

//function decloration
export function App() {

    let [raitingValue, setRaitingValue] = useState<RaitingType>(0)
    let [accordion, setAccordion] = useState(false)
    let [on, setOn] = useState(false)

    const itemsForAccordion = [{title: 'Alex', value: 3}, {title: 'Sanya', value: 1}, {title: 'Tim', value: 14}, {title: 'Vadzim', value: 10}]

    const onClickHandler = (e:number) => {
        console.log(e)
    }

    return (
        <div>
            <OnOff/>
            <h1>Uncontroled raiting</h1>
            <Raiting/>
            <Accordion title={'Menu1'}/>
            <h1>Selfcontroled raiting</h1>
            <ControlRaiting callback={setRaitingValue} value={raitingValue} title={'ControlRaiting'}/>
            <ControlAccordion
                callback={() => setAccordion(!accordion)}
                title={'Menu1'}
                collapsed={accordion}
                items={itemsForAccordion}
                onClickHandler={onClickHandler}
            />
            <ControledOnOff state={on} callback={setOn}/>
            <ContainerControlInput/>
        </div>
    );
}

