import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <>
    <div className="sign-up-form">
      <h1 className="sign-up-header">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-inputs">
        <div>
        <label className="label-sign-up">
          {/* Email */}
          <input className="sign-up-input"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
        <label className="label-sign-up">
          {/* Username */}
          <input className="sign-up-input"
          placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
         {errors.username && <p>{errors.username}</p>}
         </div>

         <div>
        <label className="label-sign-up">
          {/* First Name */}
          <input className="sign-up-input"
          placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        {errors.firstName && <p>{errors.firstName}</p>}
        </div>

        <div>
        <label className="label-sign-up">
          {/* Last Name */}
          <input className="sign-up-input"
          placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        {errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div>
        <label className="label-sign-up">
          {/* Password */}
          <input className="sign-up-input"
          placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
        <label className="label-sign-up">
          {/* Confirm Password */}
          <input className="sign-up-input"
          placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
         </div>
        {errors.confirmPassword && (
          <p>{errors.confirmPassword}</p>

        )}

        <div className="signup-button">
        <button type="submit" disabled={!email || !password || !lastName || !firstName  || !password || !confirmPassword || username.length<4 || password.length<6}>Sign Up</button>
        </div>
</div>
      </form>
      </div>
    </>
  );
}

export default SignupFormModal;
