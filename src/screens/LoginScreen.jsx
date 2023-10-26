import React from "react";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="screen">
      <div className="screen_background">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          className="screen_logo"
          alt=""
        />
        <button className="screen_button">Sign In</button>
        <div className="screen_gradient"></div>
      </div>
    </div>
  );
};

export default LoginScreen;
