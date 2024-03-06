import { useState } from "react";

const CounterTask = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const calculateBackgroundColor = () => {
        const colorLevel = Math.min(count * 10, 255);
        return `rgba(${colorLevel}, 0, 0, 1)`;
    };
    return (

        <div className="counter-container" style={{ backgroundColor: calculateBackgroundColor() }}>
            <h2>Count : {count}</h2>
            <div className="buttons-container">
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>

    )
}

export default CounterTask;
