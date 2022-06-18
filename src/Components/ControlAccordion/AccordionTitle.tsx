import React from "react";

type PropsType = {
    title:string
    dispatch:()=>void
    collapsed:boolean
}

export function AccordionTitle(props:PropsType){

    return <div>
        <h3 onClick={props.dispatch}>--- {props.title} ---</h3>
    </div>
}