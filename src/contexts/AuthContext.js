import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  let history = useHistory();
  const loginRedirect = () => {
    history.push("/");
  };

  const signUpRedirect = () => {
    history.push("/sign-in");
  };

  const logOutRedirect = () => {
    history.push("/");
  };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gendre, setGendre] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUserPhone, setCurrentUserPhone] = useState("");
  const [currentUserGendre, setCurrentUserGendre] = useState("");
  const [waitToken, setWaitToken] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signUpRePasswordError, setSignUpRePasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [signupError, setSignupError] = useState(false);

  const signUpdata = {
    name: name,
    password: password,
    email: email,
    phone: phone,
    gendre: gendre,
  };
  const logIndata = {
    email: email,
    password: password,
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setSignUpRePasswordError(true);
    } else {
      setSignUpRePasswordError(false);
      axios
        .post(
          "https://boiling-waters-85095.herokuapp.com/api/users",
          signUpdata
        )
        .then((res) => {
          console.log(res);
          setSignUpSuccess(true);
          signUpRedirect();
        })
        .catch((err) => {
          console.log(err);
          setSignupError(true);
        });
    }
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
        loginRedirect();
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
      });
  };

  const handleLogOut = () => {
    localStorage.clear();
    setCurrentUser("");
    setLoggedIn(!loggedIn);
    logOutRedirect();
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
        setCurrentUser(res.data.name);
        setCurrentUserEmail(res.data.email);
        setCurrentUserPhone(res.data.phone);
        setCurrentUserGendre(res.data.gendre);
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
        rePassword,
        setRePassword,
        email,
        setEmail,
        phone,
        setPhone,
        gendre,
        setGendre,
        currentUser,
        currentUserEmail,
        currentUserGendre,
        currentUserPhone,
        history,
        loggedIn,
        setLoggedIn,
        handleLogOut,
        loginError,
        signupError,
        setSignupError,
        signUpRePasswordError,
        setSignUpRePasswordError,
        // signUpSuccess,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
