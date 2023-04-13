import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'
import SignUp from "./components/SignUp";
import TeslaAccount from "./components/TeslaAccount";

function App() {
  const user = useSelector(selectUser)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/login' element={user ? <Navigate to='/teslaacount'/> : <Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/teslaaccount' element={user ? <Navigate to='/login'/> : <TeslaAccount/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
