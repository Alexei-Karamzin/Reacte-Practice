import React, {useState} from "react";
import { AccordionTitle } from "./AccordionTitle";
import { Accordionbudy } from "./Accordionbudy";

type PropsType = {
    title:string,
    callback:()=>void
    collapsed:boolean
}

export function ControlAccordion(props:PropsType) {


    /*const onClickHandlerCollapsed = () => {
      return (
          setCollapsed(!collapsed)
      )
    }*/

    return (
        <div>
            <AccordionTitle collapsed={props.collapsed} callback={props.callback} title={props.title}/>
            {!props.collapsed && <Accordionbudy />}
        </div>
    )
}