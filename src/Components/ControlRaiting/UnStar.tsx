import React from "react";
import {RaitingType} from "./ControlRaiting";

type PropsType = {
    selected:Boolean
    callback:(value:RaitingType)=>void
    value:RaitingType
}

export function UnStar(props:PropsType) {
    return <span onClick={()=>props.callback(props.value)}>{props.selected ? <b>STAR </b> : <span>STAR </span>}</span>
}