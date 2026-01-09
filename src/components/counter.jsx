import { useState,useEffect } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("user changed the value");
    },[count]);
    
    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
    return (
        <div>
            <h2>Counter</h2>
            <p>Count:{count}</p>
            <button onClick={handleIncrement}>Inc</button>
            <button onClick={handleDecrement}>Dec</button>
        </div>
    ); 
}