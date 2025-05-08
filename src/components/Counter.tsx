import type {CounterType} from "../types";
import {useState} from "react";

type CounterProps = {
    counterType: CounterType;
}

export default function Counter(counterProps:CounterProps)
{
    const [counter, setCounter] = useState<number>(counterProps.counterType.prevCounter);

    function incCounter(){
        setCounter(counter+1);
    }

    function decCounter(){
        setCounter(counter-1);
    }

    return (
        <>
            <p>Count: {counter}</p>
            <button onClick={incCounter}>+</button>
            <button onClick={decCounter}>-</button>
        </>
    )
}