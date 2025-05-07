import './App.css';
import {response} from '../data/RaMResponse.ts';
import CharacterCard from "./components/CharacterCard.tsx";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/Navbar.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import Characters from "./components/Characters.tsx";
import Counter from "./components/Counter.tsx";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    function handleCounter(input:number){
        setCounter(input)
    }

    return (
        <>
            <header>
                <NavBar/>
            </header>
            <Routes>
                <Route path={"/"} element={<p><h1>Welcome to my page :)</h1><h2>Counter: {counter}</h2></p>}></Route>
                <Route path={"/counter"}
                       element={
                           <Counter
                               prevCounter = {counter}
                               setPrevCounter ={handleCounter}
                           />
                       }
                ></Route>
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
