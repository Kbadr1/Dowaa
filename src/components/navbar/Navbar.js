import React from "react";
import "./navbar.scss";
import BottomNav from "./navbarComponents/bottomNav/BottomNav";
import SecondNav from "./navbarComponents/secondNav/SecondNav";
import TopNav from "./navbarComponents/topNav/TopNav";

const Navbar = () => {
  return (
    <div className="Navbar">
      <TopNav />
      <SecondNav />
      <BottomNav />
    </div>
  );
};

export default Navbar;
