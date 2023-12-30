import { NavLink } from "react-router-dom";
import Menu from '../assets/menu.png'

function NavBar() {
    return (
        <div className="nav-bar">
            <header>
                <h1><NavLink to="/"> freebiestech </NavLink></h1>
                <ul>
                    <li><NavLink to="/"> Home </NavLink></li>
                    <li><NavLink to="/update"> Update </NavLink></li>
                    <li><NavLink to="/crypto"> Crypto </NavLink></li>
                    <li><NavLink to="/airtime"> Airtime </NavLink></li>
                    <li><NavLink to="/about"> About </NavLink></li>
                    <li><NavLink to="/contact"> Contact Us </NavLink></li>
                </ul>
                <img src={Menu}></img>
            </header>
            <nav>
                <p>Latest Post</p>
            <ul>
                    <li><NavLink to="/"> Home </NavLink></li>
                    <li><NavLink to="/update"> Update </NavLink></li>
                    <li><NavLink to="/crypto"> Crypto </NavLink></li>
                    <li><NavLink to="/airtime"> Airtime </NavLink></li>
                    <li><NavLink to="/about"> About </NavLink></li>
                    <li><NavLink to="/contact"> Contact Us </NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;