import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
