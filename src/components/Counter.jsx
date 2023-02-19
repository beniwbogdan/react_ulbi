import React from 'react'
import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count + 1)
    }
    const minusOne = () => {
        setCount(count - 1)
    }
    const zeroReset = () => {
        setCount(0)
    }

    return (
        <div>
            <div>{count}</div>

            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={zeroReset}>reset</button>
        </div>
    )
}

export default Counter