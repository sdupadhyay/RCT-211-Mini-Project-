import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { USER_LOGIN_SUCESS } from "../Redux/AuthReducer/actionTypes";
const Login = () => {
  const location = useLocation();
  const nav = location.state.from.pathname || "/";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const data = {
        email,
        password,
      };
      //console.log(data);
      dispatch(login(data)).then((res) => {
        if (res.type === USER_LOGIN_SUCESS) {
          navigate(nav, { replace: true });
        }
      });
    }
  };
  // const store = useSelector((store) => store);
  // console.log(store);
  return (
    <div
      style={{
        border: "1px solid black",
        width: "35%",
        margin: "auto",
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <div>
          <label>User Name</label>
          <input
            placeholder="Enter Email "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <input
            placeholder="Enter Password "
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
