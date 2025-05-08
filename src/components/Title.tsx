import type {CounterType} from "../types";

type TitleProps = {
    counterType: CounterType;
}

export default function Title(titleProps:TitleProps){
    return(
        <>
            <h1>Welcome to my page :)</h1>
            <h2>Counter: {titleProps.counterType.prevCounter}</h2>
        </>
    )
}