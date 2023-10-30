import "./ProfileScreen.css";
import Nav from "../component/Nav";
import { auth } from "../../firebse";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_main">
        <h1>Edit Profile</h1>
        <div className="profileScreen_container">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt="netflix-avatar"
            className="profileScreen_avtar"
          />
          <div className="profileScreen_userDetails">
            <h3 className="user_email">{user?.email}</h3>
            <h2 className="profileScreen_plantext">
              Plan (Current Plan: premium)
            </h2>
            <div className="profileScreen_planDetails">
              <h2 className="profileScreen_renewal">
                Renawal date: 04/03/2021
              </h2>
              <div className="subscription_panel">
                <div className="standard">
                  <div className="heading_standard">
                    <h3>Netflix standart</h3>
                    <h3>1080p</h3>
                  </div>

                  <div className="button_standard">
                    <button className="standard_button">Subscribe</button>
                  </div>
                </div>

                <div className="basic">
                  <div className="heading_basic">
                    <h3>Netflix basic</h3>
                    <h3>480p</h3>
                  </div>
                  <div className="button_basic">
                    <button className="basic_button">Subscribe</button>
                  </div>
                </div>
                <div className="premium">
                  <div className="heading_premium">
                    <h3>Netflix premium</h3>
                    <h3>4k+HDR</h3>
                  </div>
                  <div className="button_premium">
                    <button className="premium_button">Current Package</button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  console.log("clicked!");
                  auth.signOut();
                  navigate("/");
                }}
                className="profileScreen_signOut"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
