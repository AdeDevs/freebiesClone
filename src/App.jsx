import { Route, Routes } from "react-router-dom";
import NavBar from "./screens/nav";
import Home from "./screens/Home";
import About from "./screens/About";
import Update from "./screens/Update";
import Crypto from "./screens/Crypto";
import Contact from "./screens/Contact";
import Airtime from "./screens/Airtime"
import ErrorBoundary from "./screens/ErrorBoundary"
import Recent from "./screens/recent";
import FullArticle from "./screens/articlepage";

function App() {
  return (
    <div>
      <NavBar />
      <div className="main">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
        <Route path="/crypto" element={<Crypto/>}></Route>
        <Route path="/airtime" element={<Airtime/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/recent" element={<Recent />}></Route>
        <Route path="/article" element={<FullArticle />}></Route>
        <Route path="*" element={<ErrorBoundary />}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
