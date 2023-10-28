// import React from "react";
import { useState } from "react";
import "./Nav.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  return (
    <div className={`nav ${isScroll && "nav_color"}`}>
      <div className="nav_container">
        <img
          className="nav_logo"
          // src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix-logo"
          onClick={() => navigate("/")}
        />

        <img
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          alt="netflix-avatar"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
};

export default Nav;
