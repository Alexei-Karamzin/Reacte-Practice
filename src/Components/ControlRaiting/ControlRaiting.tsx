import React from "react";
import { UnStar } from "./UnStar";

export type RaitingType = 0|1|2|3|4|5

type RaitingPropsType = {
    callback: (value:RaitingType)=>void
    value: RaitingType
}

export function ControlRaiting(props:RaitingPropsType) {
    return (
        <div>
            <UnStar callback={props.callback} value={1} selected={props.value>0}/>
            <UnStar callback={props.callback} value={2} selected={props.value>1}/>
            <UnStar callback={props.callback} value={3} selected={props.value>2}/>
            <UnStar callback={props.callback} value={4} selected={props.value>3}/>
            <UnStar callback={props.callback} value={5} selected={props.value>4}/>
        </div>
    )
}
