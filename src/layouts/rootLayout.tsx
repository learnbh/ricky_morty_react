import {Outlet} from "react-router-dom";
import NavBar from "../components/Navbar.tsx";
// import {response} from "../../data/RaMResponse.ts";
// import type {CharacterType} from "../components/CharacterCard.tsx";

export default function RootLayout(){
 //   const characters:CharacterType[] = response;
    return(
        <>
            <div className="">
                <header className="text-gray-700 m2">
                    <NavBar/>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}