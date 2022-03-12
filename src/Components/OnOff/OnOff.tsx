import React, {useState} from 'react';


export const OnOff = () => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width:'50px',
        height:'30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green': 'white'
    }
    const offStyle = {
        width:'50px',
        height:'30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'white':'red'
    }
    const indicatorStyle = {
        width:'15px',
        height:'15px',
        borderRadius: '8px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '15px',
        marginTop: '10px',
        backgroundColor: on ? 'green':'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => {setOn(true)} }>On</div>
            <div style={offStyle } onClick={ () => {setOn(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
