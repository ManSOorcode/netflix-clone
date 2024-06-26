import { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import "./SignUpform.css";
import {
  PiEyeBold,
  PiEyeClosedBold,
  PiEyeSlashBold,
  PiEyesBold,
} from "react-icons/pi";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [toggle, setToggle] = useState({
    isRegister: false,
    isVisible: false,
  });

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // For example, require a minimum length, special characters, etc.
    return password.length >= 6; // Simple example: at least 6 characters
  };

  const register = (e) => {
    e.preventDefault();

    console.log("click", email);

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
        console.log(response, "res");
      } catch (err) {
        console.log(err);
        setError("Email in use. Sign in or choose another.");
      }
    };

    userRegister();
  };

  const signIn = (e) => {
    e.preventDefault();

    if (!toggle.isRegister) {
      //sign will work
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
          setError("Account is not created first signup");
        }
      };

      userLogin();
    } else {
      //user Register
      register(e);
    }
  };

  const toggleHandler = () => {
    setToggle((prev) => ({
      ...prev,
      isRegister: !prev.isRegister,
    }));
  };

  const passwordToggleHandler = () => {
    setToggle((prev) => ({
      ...prev,
      isVisible: !prev.isVisible,
    }));
  };

  console.log(toggle);

  return (
    <div className="signup_screen">
      <form>
        <h1>{toggle.isRegister ? "Register Your Self!" : "Sign In."}</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          required
        />
        <div className="password-input-container">
          <input
            type={!toggle.isVisible ? "password" : "text"}
            // type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div onClick={passwordToggleHandler} className="pass_parent">
            {!toggle.isVisible ? (
              <PiEyeClosedBold className="pass_icon" />
            ) : (
              <PiEyeBold className="pass_icon" />
            )}
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" onClick={signIn}>
          {toggle.isRegister ? "Register" : "Sign In"}
        </button>
        <h4>
          <span className="signupScreen_gray">
            {toggle.isRegister ? "Have a account?" : "New to Netflix?"}
          </span>
          <span className="signupScreen_link" onClick={toggleHandler}>
            {toggle.isRegister ? " Sign In" : " Sign up now."}
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpForm;
