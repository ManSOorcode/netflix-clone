// eslint-disable-next-line react-hooks/exhaustive-deps
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

import { auth } from "../firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/reducer";

import ProfileScreen from "./screens/ProfileScreen";

function userAuth(user) {
  console.log(!user ? true : false);
  const routers = createBrowserRouter([
    {
      path: "/",
      element: !user ? <LoginScreen /> : <HomeScreen />,
    },
    {
      path: "/profile",
      element: !user ? <LoginScreen /> : <ProfileScreen />,
    },
  ]);

  return routers;
}

function App() {
  const user1 = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            token: userAuth.accessToken,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  console.log(user1);

  return (
    <>
      <div className="app">
        <RouterProvider router={userAuth(user1)} />
      </div>
    </>
  );
}

export default App;
