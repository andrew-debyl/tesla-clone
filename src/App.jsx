import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'

function App() {
  const user = useSelector(selectUser)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/login' element={user ? <Navigate to='/teslaacount'/> : <Login/>}></Route>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
