import React from "react";
import "./SignUpform.css";

const SignUpForm = () => {
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        {/* <div className="signupScreen_body"> */}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* </div> */}
        <button type="submit">Sign In</button>
        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link">Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpForm;
