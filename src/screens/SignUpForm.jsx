import React, { useRef } from "react";
import "./SignUpform.css";
import { auth } from "../../firebse";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const SignUpForm = () => {
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const register = (e) => {
    e.preventDefault();

    const userRegister = async () => {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          userEmail.current.value,
          userPassword.current.value
        );
        console.log(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    userRegister();
  };

  const signIn = (e) => {
    e.preventDefault();

    const userLogin = async () => {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          userEmail.current.value,
          userPassword.current.value
        );
        console.log(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    userLogin();
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        {/* <div className="signupScreen_body"> */}
        <input ref={userEmail} type="email" placeholder="Email" />
        <input ref={userPassword} type="password" placeholder="Password" />
        {/* </div> */}
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpForm;
