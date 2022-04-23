import React from "react";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="layout-wrapper">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
