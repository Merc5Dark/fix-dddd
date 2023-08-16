/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon } from "../Icon";
import "./style.css";

export const NavLink = ({
  state,
  expanded,
  className,
  iconName = "storefront",
  text = "Link",
  iconNameStorefront,
  iconNameBagHandle,
  iconNameLogOut,
}) => {
  return (
    <div className={`nav-link ${state} expanded-${expanded} ${className}`}>
      {!expanded && (
        <Icon
          className="icon-instance"
          name={iconName}
          nameBagHandle={iconNameBagHandle}
          nameCart={state === "active" ? "/img/icon-19.png" : undefined}
          nameLogOut={iconNameLogOut}
          nameStorefront={iconNameStorefront}
        />
      )}

      {expanded && (
        <>
          <Icon
            className="icon-instance"
            name={iconName}
            nameBagHandle={iconNameBagHandle}
            nameLogOut={iconNameLogOut}
            nameStorefront={iconNameStorefront}
          />
          <div className="link">{text}</div>
        </>
      )}
    </div>
  );
};

NavLink.propTypes = {
  state: PropTypes.oneOf(["active", "default"]),
  expanded: PropTypes.bool,
  iconName: PropTypes.string,
  text: PropTypes.string,
  iconNameStorefront: PropTypes.string,
  iconNameBagHandle: PropTypes.string,
  iconNameLogOut: PropTypes.string,
};
