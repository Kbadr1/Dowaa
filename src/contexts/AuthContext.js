import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  // let history = useHistory();
  // const loginRedirect = () => {
  //   history.push("/");
  // };

  // const signUpRedirect = () => {
  //   history.push("/sign-in");
  // };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState("");
  const [waitToken, setWaitToken] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [signupError, setSignupError] = useState(false);

  const signUpdata = {
    name: name,
    password: password,
    email: email,
    // phoneNumber: phoneNumber,
  };
  const logIndata = {
    email: email,
    password: password,
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://boiling-waters-85095.herokuapp.com/api/users", signUpdata)
      .then((res) => {
        console.log(res);
        // signUpRedirect();
      })
      .catch((err) => {
        console.log(err);
        setSignupError(true);
      });
  };

  const handleLogInSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://boiling-waters-85095.herokuapp.com/api/users/login",
        logIndata
      )
      .then((res) => {
        localStorage.setItem("token", res.data);
        setLoggedIn(true);
        setWaitToken(!waitToken);
        // loginRedirect();
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
      });
  };

  const handleLogOut = () => {
    localStorage.clear();
    setUser("");
    setLoggedIn(!loggedIn);
  };

  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    axios
      .get("https://boiling-waters-85095.herokuapp.com/api/users/me", config)
      .then((res) => {
        console.log(res);
        setUser(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [waitToken]);

  return (
    <AuthContext.Provider
      value={{
        handleSignUpSubmit,
        handleLogInSubmit,
        name,
        setName,
        password,
        setPassword,
        email,
        setEmail,
        user,
        // history,
        loggedIn,
        setLoggedIn,
        handleLogOut,
        loginError,
        signupError,
        setSignupError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
