"use client";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  return (
    <>
      {sidebarLinks.map((item) => {
        const pathname = usePathname();
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
      })}
    </>
  );
};

export default NavLinks;
