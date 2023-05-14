// frontend/src/components/LoginFormModal/index.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const minUserLogin=4;
  const minPassword=6;
   const isDisabled = credential.length<minUserLogin || password.length<minPassword

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };
  const handleDemoUser= (e) =>{
    e.preventDefault();
    return dispatch(sessionActions.login({credential:"Demo-lition", password:"password"}))
    .then(closeModal)
  }

  return (
    <>
    <div className="Login-form">
      <h1 className="login-h2">Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-email-password">
          <div className="emial-login">

        <label >
          <div>
          Username or Email
          </div>
          <input className="login-input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        </div>
        <label>
          <div>
          Password
          </div>
          <input className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.credential && (
          <p>{errors.credential}</p>

        )}
        </div>
        <div className="buttons-login">
        <div>
        <button type="submit" disabled={isDisabled}>Log In</button>
        </div>
        <div>
        <button className="demo-button" type="submit" onClick={handleDemoUser}>Demo User</button>
        </div>
        </div>
      </form>
      </div>
    </>
  );
}

export default LoginFormModal;
