import './App.css';
import {response} from './RaMResponse';
import CharacterCard from "./CharacterCard.tsx";
import {Route, Routes} from "react-router-dom";
import NavBar from "./Navbar.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";
import Characters from "./Characters.tsx";
import Counter from "./Counter.tsx";
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
                <Route path={"/characters/:id"} element={<CharacterDetailCard allCharactersProp={response}/>}></Route>
                <Route path={"/register"} element={<h1>Du bist jetzt ausgeloggt, Tschüßi ;)</h1>}></Route>
                <Route path={"/logout"} element={<h1>Du bist jetzt ausgeloggt, Tschüßi ;)</h1>}></Route>
            </Routes>
        </>
    )
}

export default App
