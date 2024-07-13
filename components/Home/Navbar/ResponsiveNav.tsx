"use client";
import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <>
      <Navbar openNav={showNavHandler} />
      <MobileNav nav={showNav} closeNav={closeNavHandler} />
    </>
  );
};

export default ResponsiveNav;
