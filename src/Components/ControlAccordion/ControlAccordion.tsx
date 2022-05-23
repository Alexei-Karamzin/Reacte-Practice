import React from "react";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./Accordionbudy";

type PropsType = {
    title:string
    callback:()=>void
    collapsed:boolean
    items: Array<ItemType>
    onClickHandler: (e:number)=>void
}

export type ItemType = {
    title: string
    value: number
}

export function ControlAccordion(props:PropsType) {


    /*const onClickHandlerCollapsed = () => {
      return (
          setCollapsed(!collapsed)
      )
    }*/

    return (
        <div>
            <AccordionTitle
                collapsed={props.collapsed}
                callback={props.callback}
                title={props.title}
            />
            {!props.collapsed && <AccordionBody
                items={props.items}
                onClickHandler={props.onClickHandler}
            />}
        </div>
    )
}