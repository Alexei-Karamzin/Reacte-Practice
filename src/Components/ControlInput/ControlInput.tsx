import React, {ChangeEvent} from 'react';

type PropsType = {
    value: string
    onChangeInputHandler: (e:ChangeEvent<HTMLInputElement>)=>void
}

export const ControlInput = (props:PropsType) => {

    return (
        <div>
            <input value={props.value} onChange={(e)=>props.onChangeInputHandler(e)}/>
        </div>
    );
};

