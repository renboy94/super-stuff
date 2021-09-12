import React, { Children } from "react";
import NavBar from "../components/nav/NavBar";

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <NavBar title="SUPER STUFF" />
      {children}
    </React.Fragment>
  );
};

export default Layout;
