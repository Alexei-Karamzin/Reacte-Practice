import React from "react";

export type PropsType = {
    title:string
    callback:(collapsed:boolean)=>void
    collapsed:boolean
}

export function AccordionTitle(props:PropsType){

    return <div>
        <h3 onClick={()=>props.callback(!props.collapsed)}>--- {props.title} ---</h3>
    </div>
}