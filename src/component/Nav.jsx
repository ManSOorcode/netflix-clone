// import React from "react";
import { useState } from "react";
import "./Nav.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../public/avatar.png";
import netflixLogo from "../../public/netflix_logo.png";

const Nav = () => {
  const [isScroll, setScrollStyle] = useState(false);

  const navigate = useNavigate();

  const settingScrollStyle = () => {
    if (window.scrollY > 100) {
      setScrollStyle(true);
    } else {
      setScrollStyle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", settingScrollStyle);

    return () => document.removeEventListener("scroll", settingScrollStyle);
  }, []);

  const logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.pn";
  const avatarUrl =
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.pn";

  return (
    <div className={`nav ${isScroll && "nav_color"}`}>
      <div className="nav_container">
        <img
          className="nav_logo"
          src={netflixLogo}
          alt="netflix-logo"
          onClick={() => navigate("/")}
        />

        <img
          className="nav_avatar"
          src={avatar}
          alt="netflix-avatar"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
};

export default Nav;
