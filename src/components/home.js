import React, { useState } from 'react';
export default function Home() {
    const [count, setCount] = useState(()=>4)

    function incrementCount(){
        setCount(prevState => prevState + 1)
    }

    function decrementCount(){
        setCount(prevState => prevState - 1)
    }


    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}