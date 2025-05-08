import './App.css';
import {response} from '../data/RaMResponse.ts';
import CharacterCard from "./components/CharacterCard.tsx";
import {Route, Routes} from "react-router-dom";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import Characters from "./components/Characters.tsx";
import Counter from "./components/Counter.tsx";
import RootLayout from "./layouts/rootLayout.tsx";
import {useState} from "react";
import type {CounterType} from "./types";
import Title from "./components/Title.tsx";

function App() {
    const [counter, setCounter] = useState(0);
    const counterProp:CounterType = {
        prevCounter:  counter,
        setPrevCounter: handleCounter
    }
    function handleCounter(input:number){
        setCounter(input)
    }

    return (
        <>
            <Title counterType={counterProp}/>
            <RootLayout>
            </RootLayout>
            <Routes>
                <Route path={"/"} ></Route>
                <Route path={"/counter"}
                       element={
                           <Counter
                               counterType={counterProp}
                           />
                       }
                >
                </Route>
                <Route path={"/characters"} element = {<Characters/>}></Route>
                <Route path={"/character"} element={response.map( c => (
                    <CharacterCard
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        image={c.image}
                    />
                ))}></Route>
                <Route path={"/character/:id"} element={<CharacterDetailCard allCharactersProp={response}/>}></Route>
                <Route path={"/logout"} element={<h1>Du bist jetzt ausgeloggt, Tschüßi ;)</h1>}></Route>
            </Routes>
        </>
    )
}

export default App
