import {Link, useNavigate} from "react-router-dom";


export default function NavBar(){

    const routeTo = useNavigate();

    function routeToLogoutPage(){
        routeTo("/logout");
    }
    return(
        <>
            <ul style={{listStyle:"none"}}>
                <li><Link to={"/"}>Dashboard</Link></li>
                <li><Link to={"/counter"}>Counter</Link></li>
                <li><Link to={"/characters"}>Characters</Link></li>
                <li><Link to={"/character"}>Character</Link></li>
                <li><Link to={"/register"}>Registrierung</Link></li>
                <li><button onClick={routeToLogoutPage}>Logout</button></li>
            </ul>
        </>
    )
}