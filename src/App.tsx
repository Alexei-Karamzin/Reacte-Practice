import React, {useState} from 'react';
import './App.css';
import {Accordion} from './Components/Accordion/Accordion';
import {Raiting} from "./Components/Raiting/Raiting";
import {OnOff} from "./Components/OnOff/OnOff";
import {ControlRaiting, RaitingType} from "./Components/ControlRaiting/ControlRaiting";
import {ControlAccordion} from "./Components/ControlAccordion/ControlAccordion";
import {UncontroledOnOff} from "./Components/UncontroledOnOff/UncontroledOnOff";

//function decloration
export function App() {

    let [raitingValue, setRaitingValue] = useState<RaitingType>(0)
    let [accordion, setAccordion] = useState(false)
    let [on, setOn] = useState(false)


    return (
    <div>
        <OnOff />
        <h1>Uncontroled raiting</h1>
        <Raiting />
        <Accordion title={'Menu1'} />
        <h1>Selfcontroled raiting</h1>
        <ControlRaiting callback={setRaitingValue} value={raitingValue}/>
        <ControlAccordion callback={()=>setAccordion(!accordion)} title={'Menu1'} collapsed={accordion}/>
        <UncontroledOnOff state={on} callback={setOn}/>
    </div>
  );
}

