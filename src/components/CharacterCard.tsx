import {useNavigate} from "react-router-dom";

export type CharacterType = {
    id:number,
    name:string,
    status?:string,
    species?:string
    type?: string,
    gender?: string,
    origin?: {
        name: string,
        url: string
    },
    location?: {
        name: string,
        url: string
    },
    image: string,
    episode?: string[],
    url?: string,
    created?: string
}

export default function CharacterCard(characterProps:Readonly <CharacterType>){
    const routeTo = useNavigate()
    function routeToDetailCard(){
        routeTo("/character/"+characterProps.id);
    }
    return (
        <>
            <p>
                <label>Name: </label>
                {characterProps.name}
            </p>
            <p>
                <button onClick={routeToDetailCard}>
                    <img src={characterProps.image} alt={characterProps.name} />
                </button>
            </p>
        </>
    )

}
