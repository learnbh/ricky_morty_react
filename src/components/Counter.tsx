import {useState} from "react";

type CounterProps = {
    prevCounter: number,
    setPrevCounter: (prevCounter:number)=>void
}

export default function Counter(prevCounter:CounterProps)
{
    const [counter, setCounter] = useState<number>(prevCounter.prevCounter);

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