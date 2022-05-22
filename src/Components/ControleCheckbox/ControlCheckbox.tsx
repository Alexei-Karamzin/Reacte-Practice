import React, {useState} from "react";
import {action} from "@storybook/addon-actions";


export const ControlCheckbox = () => {

    let [check, setCheck] = useState(false)

    const onChangeHandler = () => {
        setCheck(!check)
    }

    return <input type="checkbox" checked={check} onChange={onChangeHandler}/>
}