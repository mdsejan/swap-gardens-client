import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../components/layout/MainLayoutes";
import Services from "../pages/Services";
import AddService from "../pages/AddService";
import Error from "../components/layout/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayoutes></MainLayoutes>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
