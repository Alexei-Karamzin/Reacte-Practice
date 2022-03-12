import React from "react";

type PropsType = {
    selected:Boolean
    callback:()=>void
}

export function Star(props:PropsType) {
       return <span onClick={()=>props.callback()}>{props.selected ? <b>STAR </b> : 'STAR '}</span>
}