import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
        console.log(count)
    }

    function decrement() {
        if (count > 0) setCount(count - 1)
        console.log(count)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}> Increment </button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;