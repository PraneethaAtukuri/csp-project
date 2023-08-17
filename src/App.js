import "./App.css";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Whatwedo from "./pages/Whatwedo";
import Advice from "./pages/Advice";
import { BrowserRouter as Router, Route, Link, Routes, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/aboutus" exact element={<Aboutus/>} />
        <Route path="/contactus" exact element={<Contactus/>} />
        <Route path="/whatwedo" exact element={<Whatwedo/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
        <Route path="/advice" exact element={<Advice/>} />
      </Routes>
       </div>
  );
  
}

export default App;