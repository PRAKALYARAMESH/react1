
import "../functionalcomponents/NavBar.css"
import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
        <ol>
            
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ol>
    )
}
export default NavBar;