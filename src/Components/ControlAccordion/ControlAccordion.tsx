import React, {useReducer} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./Accordionbudy";
import {AccordionReducer, ItemType} from "./AccordionReducer";

type PropsType = {
    title: string
    items: Array<ItemType>
    onClickHandler: (e: number) => void
}


export function ControlAccordion(props: PropsType) {

    let [state, dispatch] = useReducer(AccordionReducer, {collapsed:false})

    return (
        <div>
            <AccordionTitle collapsed={state}
                            dispatch={() => dispatch({type: 'TOGGLE-COLLAPSED'})}
                            title={props.title}
            />
            {!state.collapsed &&
                <AccordionBody items={props.items}
                               onClickHandler={props.onClickHandler}
                />}
        </div>
    )
}