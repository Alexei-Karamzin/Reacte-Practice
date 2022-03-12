import React from "react";

type PropsType = {
    title:string
    callback:()=>void
    collapsed:boolean
}

export function AccordionTitle(props:PropsType){

    return <div>
        <h3 onClick={props.callback}>--- {props.title} ---</h3>
    </div>
}