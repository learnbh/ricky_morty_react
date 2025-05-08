import NavBar from "../components/Navbar.tsx";
import {Outlet} from "react-router-dom";
// import {response} from "../../data/RaMResponse.ts";
// import type {CharacterType} from "../components/CharacterCard.tsx";

export default function RootLayout(){
 //   const characters:CharacterType[] = response;
    return(
        <>
            <div>
                <header className="m-2 text-gray-400">
                    <NavBar/>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}