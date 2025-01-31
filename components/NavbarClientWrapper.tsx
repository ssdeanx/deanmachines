"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => import("@/components/navbar") as any, // Explicitly cast to 'any'
  { ssr: false }
);

const NavbarClientWrapper = () => {
  return <Navbar />;
};

export default NavbarClientWrapper;
