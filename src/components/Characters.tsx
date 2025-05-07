import CharacterCard, {type CharacterType} from "./CharacterCard.tsx";
//import {response} from "./RaMResponse.ts";
import {useEffect, useState} from "react";
import axios from "axios";

// um mit Axios post zu faken

type APIRequest = {
    name:string,
    job:string
}
// type APIResponse = {
//     name:string,
//     job:string,
//     id:string,
//     createdAt:string
// }

export default function Characters(){

    //const [allCharacters] = useState(response);
    const [characters, setCharacters] = useState<CharacterType[]>([]);

    function handleSearchInput(input:string){
        setCharacters(characters.filter(c => c.name.toLocaleUpperCase().includes(input.toLocaleUpperCase())));
    }
    // Axios
    function loadAllCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response)=> setCharacters(response.data.results))
            .catch((error)=> console.log(error));

    }
    useEffect(()=> {
        loadAllCharacters()
    }, []);

    // Post faken mit https://regres.in
    const [testCharacter, setTestCharacter] = useState<APIRequest>({
        name:"testName",
        job:"testJob"
    })

    function fakePostCharacter(){
        axios.create({
            headers: { "x-api-key": "reqres-free-v1"}
        }).post("https://reqres.in/api/users", testCharacter)
            .then(r=> console.log(r.data))
            .catch(error=> console.log(error))
    }

    return(
        <>
            <button onClick={fakePostCharacter}>Fake adding a fake character</button>
            <input onChange={(e) => handleSearchInput(e.target.value)}/>
            <div>{characters.map( c => (
                <CharacterCard
                    key={c.id}
                    id={c.id}
                    name={c.name}
                    image={c.image}
                />
            ))}
            </div>
        </>
    )
}