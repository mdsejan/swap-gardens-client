import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const MainLayoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `SwapGardens`;
    } else {
      document.title = `SwapGardens | ${location.pathname.replace("/", "")}`;
    }

    if (location.pathname === "/login" && location.state) {
      document.title = `login`;
      return;
    }
    if (location.state) {
      document.title = `${location.state}`;
    }
  }, [location.pathname, location.state]);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayoutes;
