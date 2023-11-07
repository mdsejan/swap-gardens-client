import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../components/layout/MainLayoutes";
import Error from "../components/layout/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import AllSwaps from "../pages/AllSwaps/AllSwaps";
import SwapDetails from "../pages/SwapDetails/SwapDetails";
import MySchedule from "../pages/MySchedule/MySchedule";
import AddSwap from "../pages/AddSwap/AddSwap";
import MySwaps from "../pages/MySwaps/MySwaps";
import UpdateMySwap from "../pages/MySwaps/UpdateMySwap";

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
        path: "all-swaps",
        element: <AllSwaps></AllSwaps>,
      },
      {
        path: "swap/:id",
        element: (
          <PrivateRoute>
            <SwapDetails></SwapDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "add-swap",
        element: (
          <PrivateRoute>
            <AddSwap></AddSwap>
          </PrivateRoute>
        ),
      },
      {
        path: "my-swaps",
        element: (
          <PrivateRoute>
            <MySwaps></MySwaps>
          </PrivateRoute>
        ),
      },
      {
        path: "update-swap/:id",
        element: (
          <PrivateRoute>
            <UpdateMySwap></UpdateMySwap>
          </PrivateRoute>
        ),
      },
      {
        path: "my-schedule",
        element: (
          <PrivateRoute>
            <MySchedule></MySchedule>
          </PrivateRoute>
        ),
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
