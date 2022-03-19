import React, {useState} from "react";
import {Star} from "./Star";

export function Raiting() {

    let [value, setValue]=useState(0)

    return (
        <div>
            <Star selected={value>0} callback={()=>setValue(1)} />
            <Star selected={value>1} callback={()=>setValue(2)} />
            <Star selected={value>2} callback={()=>setValue(3)} />
            <Star selected={value>3} callback={()=>setValue(4)} />
            <Star selected={value>4} callback={()=>setValue(5)} />
        </div>
    )
}
