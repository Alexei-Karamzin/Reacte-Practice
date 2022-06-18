import React, {useReducer} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./Accordionbudy";

type PropsType = {
    title: string
    items: Array<ItemType>
    onClickHandler: (e: number) => void
}

export type ItemType = {
    title: string
    value: number
}

const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export type ReducerActionType = {
    type: 'TOGGLE-COLLAPSED'
}

let reducer = (state: boolean, action: ReducerActionType) => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return !state
        throw new Error ('dont understand actions')
    }
    return state
}

export function ControlAccordion(props: PropsType) {

    //let [collapsed, dispatch] = useState(false)

    let [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div>
            <AccordionTitle collapsed={collapsed}
                            dispatch={() => dispatch({type: 'TOGGLE-COLLAPSED'})}
                            title={props.title}
            />
            {!collapsed &&
                <AccordionBody items={props.items}
                               onClickHandler={props.onClickHandler}
                />}
        </div>
    )
}