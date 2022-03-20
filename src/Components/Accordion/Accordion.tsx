import React, {useState} from "react";
import { AccordionTitle } from "./AccordionTitle";
import { Accordionbudy } from "./Accordionbudy";

export type PropsType = {
    title:string,
}

export function Accordion(props:PropsType) {

    let [collapsed, setCollapsed]=useState(false)
    
    /*const onClickHandlerCollapsed = () => {
      return (
          setCollapsed(!collapsed)
      )
    }*/

    return (
        <div>
            <AccordionTitle collapsed={collapsed} callback={setCollapsed} title={props.title}/>
            {!collapsed && <Accordionbudy />}
        </div>
    )
}