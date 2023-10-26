import HomeScreen from "./component/HomeScreen";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
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
