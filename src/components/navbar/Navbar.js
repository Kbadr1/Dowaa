import React from "react";
import BottomNav from "./navbarComponents/bottomNav/BottomNav";
import MidNav from "./navbarComponents/midNav/MidNav";
import TopNav from "./navbarComponents/topNav/TopNav";

const Navbar = () => {
  return (
    <div>
      <TopNav />
      <MidNav />
      <BottomNav />
    </div>
  );
};

export default Navbar;
