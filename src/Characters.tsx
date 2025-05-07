import CharacterCard from "./CharacterCard.tsx";
import {response} from "./RaMResponse.ts";
import {useState} from "react";


export default function Characters(){

    const [allCharacters] = useState(response);
    const [characters, setCharacters] = useState(response);

    function handleSearchInput(input:string){
        setCharacters(allCharacters.filter(c => c.name.toLocaleUpperCase().includes(input.toLocaleUpperCase())));
    }
    return(
        <>
            <input onChange={(e) => handleSearchInput(e.target.value)}/>
            <p>{characters.map( c => (
                <CharacterCard
                    key={c.id}
                    id={c.id}
                    name={c.name}
                    image={c.image}
                />
            ))}
            </p>
        </>
    )
}