/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon } from "../Icon";
import { Logo } from "../Logo";
import { NavLink } from "../NavLink";
import "./style.css";

export const NavLinks = ({
  state,
  className,
  navLinkStateDefaultClassName,
  logoUnion,
  iconNameClose = "/img/icon-15.png",
  navLinkIconNameStorefront = "/img/icon-16.png",
  navLinkIconNameBagHandle = "/img/icon-17.png",
  navLinkStateDefaultClassNameOverride,
}) => {
  return (
    <div className={`nav-links state-1-${state} ${className}`}>
      <Logo className="logo-instance" type="flat" union={logoUnion} />
      <div className="menu-icon">
        <Icon
          className="instance-node"
          name={state === "expanded" ? "close" : "menu"}
          nameClose={iconNameClose}
          nameMenu={state === "default" ? "/img/icon-12.png" : undefined}
        />
      </div>
      <NavLink
        className={navLinkStateDefaultClassName}
        expanded={state === "expanded" ? true : undefined}
        iconName="storefront"
        iconNameStorefront={navLinkIconNameStorefront}
        state="active"
        text={state === "expanded" ? "Store" : undefined}
      />
      <NavLink
        className={navLinkStateDefaultClassNameOverride}
        expanded={state === "expanded" ? true : undefined}
        iconName="bag-handle"
        iconNameBagHandle={navLinkIconNameBagHandle}
        state="default"
        text={state === "expanded" ? "Bag" : undefined}
      />
    </div>
  );
};

NavLinks.propTypes = {
  state: PropTypes.oneOf(["expanded", "default"]),
  logoUnion: PropTypes.string,
  iconNameClose: PropTypes.string,
  navLinkIconNameStorefront: PropTypes.string,
  navLinkIconNameBagHandle: PropTypes.string,
};
