import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    const [counter, setCounter] = useState(1)

    useEffect(()=>{
        console.log('effect')
        // api.getUsers().then() --> side effect
        // setInterval --> side effect
        // indexedDB --> side effect
        // document.getElementId --> side effect
        // document.title = "User" --> side effect
    })

    return (
        <div>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};

export default UseEffect;