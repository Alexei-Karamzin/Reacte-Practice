import React, {useState} from 'react';


type PropsType = {
    state:boolean,
    callback:(state:boolean)=>void
}

export const UncontroledOnOff = (props:PropsType) => {

    const onStyle = {
        width:'50px',
        height:'30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.state ? 'green': 'white'
    }
    const offStyle = {
        width:'50px',
        height:'30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.state ? 'white':'red'
    }
    const indicatorStyle = {
        width:'15px',
        height:'15px',
        borderRadius: '8px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '15px',
        marginTop: '10px',
        backgroundColor: props.state ? 'green':'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>props.callback(!props.state)}>On</div>
            <div style={offStyle } onClick={()=>props.callback(!props.state)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
