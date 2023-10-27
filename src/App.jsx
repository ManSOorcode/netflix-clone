import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

import { auth } from "../firebse";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/reducer";

function userAuth(user) {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: !user ? <LoginScreen /> : <HomeScreen />,
    },
  ]);
  return routers;
}

function App() {
  const user1 = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  console.log(user1);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            token: userAuth.accessToken,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="app">
        <RouterProvider router={userAuth(user1)} />
      </div>
    </>
  );
}

export default App;
