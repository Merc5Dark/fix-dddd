/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon } from "../Icon";
import "./style.css";

export const Button = ({
  style,
  icon,
  stateProp,
  size,
  expanded,
  className,
  iconNameBagAdd,
  iconName = "cart",
  text = "Button",
  iconNameBagHandle,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "flat",
    icon: icon || "none",
    state: stateProp || "default",
    size: size || "medium",
    expanded: expanded,
  });

  return (
    <div
      className={`button expanded-0-${state.expanded} style-${state.style} state-0-${state.state} ${state.size} ${state.icon} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.icon === "none" && <div className="text-wrapper">{text}</div>}

      {state.icon === "start" && (
        <Icon
          className={`${state.size === "medium" || state.style === "border" ? "class" : "class-2"}`}
          name={iconName}
          nameBagAdd={iconNameBagAdd}
          nameBagHandle={iconNameBagHandle}
          nameCart={
            state.size === "medium"
              ? "/img/icon-19.png"
              : state.style === "flat" && !state.expanded && state.size === "small"
              ? "/img/icon-23.png"
              : state.expanded
              ? "/img/icon-25.png"
              : undefined
          }
        />
      )}

      {!state.expanded && state.icon === "start" && <div className="div">{text}</div>}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Button.propTypes = {
  style: PropTypes.oneOf(["icon", "text", "border", "flat"]),
  icon: PropTypes.oneOf(["none", "start"]),
  stateProp: PropTypes.oneOf(["hover", "default"]),
  size: PropTypes.oneOf(["medium", "small"]),
  expanded: PropTypes.bool,
  iconNameBagAdd: PropTypes.string,
  iconName: PropTypes.string,
  text: PropTypes.string,
  iconNameBagHandle: PropTypes.string,
};
