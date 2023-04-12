import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ButtonPrimary from "./ButtonPrimary";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    //e.preventDefault()
  };

  return (
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <Link>
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
              className="login__logo-img"
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageOutlinedIcon />
          <span className="login__language-span">en-US</span>
        </div>
      </div>
      <div className="login__info">
        <h1>Sign In</h1>
        <form>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="Sign In" type="submit" onClick={signIn} />
        </form>
      </div>
    </div>
  );
}

export default Login;
