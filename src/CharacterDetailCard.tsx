import CharacterCard, {type CharacterType} from "./CharacterCard.tsx";
import {useParams} from "react-router-dom";

interface CharacterDetailCardProps {
    allCharactersProp: CharacterType[]
}

export default function CharacterDetailCard(allCharactersProp: CharacterDetailCardProps) {
    const characterId = useParams();
    return (
        <>
            <h1>Id: {characterId.id}</h1>
            {allCharactersProp.allCharactersProp
                .filter((c: CharacterType) => (c.id.toFixed() === characterId.id))
                .map((c: CharacterType) =>
                    <CharacterCard key={c.id}
                                   id={c.id}
                                   name={c.name}
                                   image={c.image}
                    />
                )}
        </>
    )
}