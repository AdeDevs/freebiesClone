import { NavLink } from "react-router-dom";
import Menu from "../assets/menu.png";
import Logo from "../assets/shizzy.png";
// import { Fade } from "react-reveal";
// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import Close from "../assets/close.png"

function NavBar() {
    const OpenMe = () => {
        document.getElementById('hamburger').style.display = "flex"
        document.getElementById('close').style.display = "initial"
        document.getElementById('mobile').style.display = "none"
        };
        // const CloseMe = () => {
          
        //   };  
          const CloseMe = () => {
            document.getElementById('hamburger').style.display = "none";
            document.getElementById('close').style.display = "none"
            document.getElementById('mobile').style.display = "initial"
          }
  return (
    <div className="nav-bar">
      <header>
        <h1>
          <NavLink to="/">
            {" "}
            <img src={Logo} />{" "}
          </NavLink>
        </h1>
        <ul>
          <li onClick={CloseMe}>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li onClick={CloseMe}>
            <NavLink to="/update"> Update </NavLink>
          </li>
          <li onClick={CloseMe}>
            <NavLink to="/crypto"> Crypto </NavLink>
          </li>
          <li onClick={CloseMe}>
            <NavLink to="/airtime"> Airtime </NavLink>
          </li>
          <li onClick={CloseMe}>
            <NavLink to="/about"> About </NavLink>
          </li>
          <li onClick={CloseMe}>
            <NavLink to="/contact"> Contact Us </NavLink>
          </li>
        </ul>
        <img id="mobile" src={Menu} onClick={OpenMe}></img>
        <img id="close" src={Close} onClick={CloseMe}/>
      </header>

      <div id="hamburger">
        <section>
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/update"> Update </NavLink>
          </li>
          <li>
            <NavLink to="/crypto"> Crypto </NavLink>
          </li>
          <li>
            <NavLink to="/airtime"> Airtime </NavLink>
          </li>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contact Us </NavLink>
          </li>
        </ul>
        </section>
      </div>
      <nav>
        <p>Latest Post</p>
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/update"> Update </NavLink>
          </li>
          <li>
            <NavLink to="/crypto"> Crypto </NavLink>
          </li>
          <li>
            <NavLink to="/airtime"> Airtime </NavLink>
          </li>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contact Us </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
