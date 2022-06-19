import React from "react";
import {ItemType} from "./AccordionReducer";

type PropsType = {
    items: Array<ItemType>
    onClickHandler: (e:number)=> void
}

export function AccordionBody(props: PropsType){


    return <div>
        <ul>
            {props.items.map( (el, index) =>
                <li
                    key={index}
                    onClick={()=>props.onClickHandler(el.value)}
                >
                    {el.title}
                </li> )}
        </ul>
    </div>
}