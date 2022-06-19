import React from "react";
import {initStateType} from "./AccordionReducer";

type PropsType = {
    collapsed: initStateType
    dispatch:()=>void
    title:string
}

export function AccordionTitle(props:PropsType){

    return <div>
        <h3 onClick={props.dispatch}>--- {props.title} ---</h3>
    </div>
}