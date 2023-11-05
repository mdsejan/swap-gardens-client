import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../components/layout/MainLayoutes";
import Services from "../pages/Services";
import AddService from "../pages/AddService";
import Error from "../components/layout/Error";
import Home from "../pages/Home/Home";

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
        element: <Services></Services>,
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default routes;
