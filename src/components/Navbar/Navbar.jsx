/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "../NavLink";
import { NavLinks } from "../NavLinks";
import "./style.css";

export const Navbar = ({ state, className }) => {
  return (
    <div className={`navbar state-2-${state} ${className}`}>
      <NavLinks
        className={`${state === "expanded" ? "class-5" : "class-6"}`}
        iconNameClose={state === "expanded" ? "/img/icon-4.png" : undefined}
        logoUnion="/img/union-5.png"
        navLinkIconNameBagHandle={state === "expanded" ? "/img/icon-14.png" : undefined}
        navLinkIconNameStorefront={state === "expanded" ? "/img/icon-13.png" : undefined}
        navLinkStateDefaultClassName={`${state === "expanded" ? "class-3" : "class-4"}`}
        navLinkStateDefaultClassNameOverride={`${state === "expanded" && "class-7"}`}
        state={state === "expanded" ? "expanded" : "default"}
      />
      <div className="nav-link-bottom">
        <NavLink
          className={`${state === "expanded" ? "class-8" : "class-9"}`}
          expanded={state === "expanded" ? true : undefined}
          iconName="log-out"
          iconNameLogOut="/img/icon-7.png"
          state="active"
          text={state === "expanded" ? "Logout" : undefined}
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  state: PropTypes.oneOf(["expanded", "default"]),
};
