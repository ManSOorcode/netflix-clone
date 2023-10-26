import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

import { auth } from "../firebse";
import { useEffect } from "react";

const user = null;
const routers = createBrowserRouter([
  {
    path: "/",
    element: !user ? <LoginScreen /> : <HomeScreen />,
  },
]);

function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) console.log(userAuth);
    });
    return unsubscribe;
  }, []);

  // console.log(user);
  return (
    <>
      <div className="app">
        <RouterProvider router={routers} />
      </div>
    </>
  );
}

export default App;
