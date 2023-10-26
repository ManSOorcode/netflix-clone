import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

const user = null;
const routers = createBrowserRouter([
  {
    path: "/",
    element: !user ? <LoginScreen /> : <HomeScreen />,
  },
]);

function App() {
  return (
    <>
      <div className="app">
        <RouterProvider router={routers} />
      </div>
    </>
  );
}

export default App;
