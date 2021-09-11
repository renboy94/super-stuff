import React from "react";
import { Nav, NavbarTitle } from "./NavBar.style";

interface NavBarProps {
  title: string;
}

const NavBar = ({ title }: NavBarProps) => {
  return (
    <Nav>
      <NavbarTitle data-testid="nav-title">{title}</NavbarTitle>
    </Nav>
  );
};

export default NavBar;
