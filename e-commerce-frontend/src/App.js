import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Create from "./pages/auth/Create";
import Login from "./pages/auth/Login";
import { Toaster } from "react-hot-toast";
import CreateProduct from "./pages/dashboard/product/CreateProduct";
import ListProduct from "./pages/dashboard/product/ListProduct";
import DashboardLayout from "./layout/DashboardLayout";
import UpdateProduct from "./pages/dashboard/product/UpdateProduct";
import Index from "./pages/index";
import SingleProduct from "./pages/product/SingleProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Index />
        },
        {
          path: "/product/:id",
          element: <SingleProduct />
        }
      ]
    },
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
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "addProduct",
          element: <CreateProduct />
        },
        {
          path: "listProduct",
          element: <ListProduct />
        },
        {
          path: "updateProduct/:id",
          element: <UpdateProduct />
        }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
