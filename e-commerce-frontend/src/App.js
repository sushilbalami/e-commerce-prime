import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Create from "./pages/auth/Create";
import Login from "./pages/auth/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      children: [
        {
          path: "create",
          element: <Create />
        },
        {
          path: "login",
          element: <Login />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
