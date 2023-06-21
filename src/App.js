import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Account from "./Components/Account";
import Gallery from "./Components/Gallery";
import PostDetails from "./Components/PostDetails";
import Todo from "./Components/Todo";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Nabvar from "./Components/Nabvar";
import Footer from "./Components/Footer";
import { Routes, Route, BrowserRouter ,Link } from "react-router-dom";
import bg from './bg.png';
function App() {
  return (
    <>
      <div className="appbg">
        <div>
        <BrowserRouter>
            <Nabvar />
            <Routes>
              <Route exact path="/home" element={<Home />} />
                
              <Route exact path="/Gallery"  element={<Gallery/>} />
              
              <Route exact path="/account" element={<Account/>} />
                
              <Route exact path="/todo"  element={<Todo/>} />
              
              <Route exact path="/PostDetails" element={<PostDetails/>}/>
          
          </Routes>
<Footer />
   </BrowserRouter>
        </div>

    </div>
  </>
  );
}

export default App;
