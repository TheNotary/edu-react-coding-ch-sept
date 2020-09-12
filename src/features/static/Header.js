import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  const base = process.env.PUBLIC_SUFFIX || "";

  return (
    <nav>
      <NavLink to={`${base}/`} activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to={`${base}/a`} activeStyle={activeStyle} exact>
        Section A
      </NavLink>
    </nav>
  );
};

export default Header;
