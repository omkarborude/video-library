import { useEffect, useState } from "react";
import "./auth.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../export";
import axios from "axios";
console.log();

export const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const path = useLocation().state;

  const { dispatch, username } = useAuth();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dark("Loging In!", {
      position: "top-right",
      autoClose: 2000,
    });
    try {
      const { status, data } = await axios.post(
        "https://videolibback.omkarborude8354.repl.co/users/login",
        state
      );

      if (status === 200) {
        localStorage.setItem(
          "authToken",
          JSON.stringify({ login: true, data })
        );
        dispatch({ type: "LOGIN_USER", payload: data });
        dispatch({ tyoe: "SET_LOGIN", payload: true });
        navigate(path === null ? "/" : path.from);
      } else {
        navigate(path === null ? "/login" : path.from);
      }
    } catch (error) {
      const { status, data } = error.response;

      if (status === 401) {
        setErrors((state) => ({ ...state, password: data.message }));
      } else if (status === 404) {
        setErrors((state) => ({ ...state, email: data.message }));
      }
    }
  };

  return (
    <div className="login-main-div">
      <form onSubmit={handleSubmit}>
        <h1 className="login-heading">LOGIN</h1>

        <div className="input-div">
          <input
            className="email-input"
            value={state.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter Your Email Here"
            name="email"
          />
          <span className="error">{errors.email}</span>
        </div>

        <div className="input-div-password">
          <input
            className="passowrd-input"
            placeholder="Enter Your Passowrd Here"
            value={state.password}
            onChange={handleChange}
            type={!showPassword ? "password" : "text"}
            name="password"
          />
          <a
            onClick={() => setShowPassword((state) => !state)}
            className="signup-password"
          >
            {showPassword ? (
              <i className="fa fa-eye"></i>
            ) : (
              <i className="fa fa-eye-slash"></i>
            )}
          </a>
        </div>

        <div className="btn-div">
          <input type="submit" className="btn-login" value="LOGIN" />

          <div>
            <Link to="/signup">
              <button className="btn-signup">SIGNUP</button>
            </Link>
          </div>
        </div>

        <div className="error-div">
          <span>{errors.password}</span>
          <span>{errors.email}</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
