import {Link, useNavigate} from "react-router-dom";


export default function NavBar(){

    const routeTo = useNavigate();

    function routeToLogoutPage(){
        routeTo("/logout");
    }
    return(
        <>
            <ul style={{listStyle:"none"}}>
                <li>
                    <button onClick={routeToLogoutPage}  className="border-0 rounded-2xl pl-2 pb-1 pr-2">Logout</button>
                </li>
                <li><Link to={"/"}>Dashboard</Link></li>
                <li><Link to={"/counter"}>Counter</Link></li>
                <li><Link to={"/characters"}>Characters</Link></li>
                <li><Link to={"/character"}>Character</Link></li>
            </ul>
        </>
    )
}