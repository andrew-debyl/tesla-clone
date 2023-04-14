import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import {useDispatch, useSelector} from 'react-redux'
import {login, logout, selectUser} from './features/userSlice'
import SignUp from "./components/SignUp";
import TeslaAccount from "./components/TeslaAccount";
import { useEffect } from "react";
import { auth } from "./components/fire-base";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(user)
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //User is signed in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName
        }))
      }
      else {
        //User not signed in
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/login' element={user ? <Navigate to='/teslaacount'/> : <Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/teslaaccount' element={!user ? <Navigate to='/login'/> : <TeslaAccount/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
