import { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import "./SignUpform.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const [passwordVisible, setPasswordVisible] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // For example, require a minimum length, special characters, etc.
    return password.length >= 6; // Simple example: at least 6 characters
  };

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // };

  const register = (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setError("Invalid email address");
      return;
    }

    if (!isPasswordValid(password)) {
      setError("Password must be at least 6 characters");
      return;
    }

    const userRegister = async () => {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(response);
      } catch (err) {
        setError("Email in use. Sign in or choose another.");
      }
    };

    userRegister();
  };

  const signIn = (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setError("Invalid email address");
      return;
    }

    if (!isPasswordValid(password)) {
      setError("Password must be at least 6 characters");
      return;
    }

    const userLogin = async () => {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(response);
      } catch (err) {
        setError("Accont is not created first signup");
      }
    };

    userLogin();
  };

  return (
    <div className="signup_screen">
      <form>
        <h1>Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* <div className="password-input-container"> */}
        <input
          // type={passwordVisible ? "text" : "password"}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <button
            type="button"
            className="toggle-password-button"
            onClick={togglePasswordVisibility}
          >
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIo45BAzl8N7qT0CJbsLgMl9Z6s7UgBab5w&usqp=CAU"
              }
              alt="Toggle Password Visibility"
            />
          </button> */}
        {/* </div> */}

        {error && <p className="error-message">{error}</p>}

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
