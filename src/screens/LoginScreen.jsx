import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpForm from "./SignUpForm";

const LoginScreen = () => {
  const [singUp, setSignUp] = useState(false);

  return (
    <div className="screen">
      <div className="screen_background">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          className="screen_logo"
          alt=""
        />
        <button className="screen_button" onClick={() => setSignUp(true)}>
          Sign In
        </button>
        <div className="screen_gradient">
          <div className="screen_body">
            {singUp ? (
              <SignUpForm />
            ) : (
              <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
                <div className="screen_input">
                  <form onClick={() => setSignUp(true)}>
                    <div className="screen_center">
                      <input type="emai" placeholder="Email Address" />
                      <button className="screen_getStarted">GET STARTED</button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
