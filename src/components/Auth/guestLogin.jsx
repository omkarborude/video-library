import axios from "axios";
import { toast } from "react-toastify";

export const guestLogin = async (
  guestState,
  dispatch,
  navigate,
  setErrors,
  path
) => {
  try {
    const { status, data } = await axios.post(
      "https://videolibback.omkarborude8354.repl.co/users/login",
      guestState
    );

    if (status === 200) {
      localStorage.setItem("authToken", JSON.stringify({ login: true, data }));
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
