import "./admin.css";
import Mail from "../assets/email.png";
import Lock from "../assets/lock.png";

function AdminLogin() {
    function ShowLogin() {
        document.getElementById("login").style.display = "initial"
        document.getElementById("signin").style.display = "none"
    }
    function ShowSignin() {
        document.getElementById("login").style.display = "none"
        document.getElementById("signin").style.display = "initial"
    }

    return (
        <div className="admin-login">
            <div id="signin">
                <h1>Admin Sign-In</h1>
                <form action="">
                    <input id="phone" type="tel" placeholder="Number" />
                    <input type="email" placeholder="Email" />
                    <input id="user" type="text" placeholder="Username" />
                    <input id="lock" type="password" placeholder="Password"/>
                    <input id="lock" type="password" placeholder="Re-Type Password"/>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div id="login">
                <h1>Admin Login</h1>
                <form action="">
                    <input type="email" placeholder="Email/Username" />
                    <input id="lock" type="password" placeholder="Password"/>
                    <button type="submit">Log In</button>
                </form>

                <a href="#">forgot username/password</a>
            </div>
            <footer className="admin-footer">
                <h1> <button onClick={ShowSignin}>Sign In</button> Do You Have An Account? <button onClick={ShowLogin}>Log In</button></h1>
            </footer>
        </div>
    )
}

export default AdminLogin;