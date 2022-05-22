import React, {ChangeEvent, useState} from 'react';
import {ControlInput} from "./ControlInput";

const ContainerControlInput = () => {
    let [value, setValue] = useState<string>('init')
    console.log(value)

    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <ControlInput value={value} onChangeInputHandler={onChangeInputHandler}/>
        </div>
    );
};

export default ContainerControlInput;