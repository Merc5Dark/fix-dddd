/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon } from "../Icon";
import "./style.css";

export const Input = ({ type, label, icon, className, text = "Label", text1 = "Placeholder" }) => {
  return (
    <div className={`input ${type} label-${label} ${icon} ${className}`}>
      {label && (
        <div className="label">
          <div className="text-wrapper">{text}</div>
        </div>
      )}

      <div className="input-field">
        <div className="input-area">
          {["end", "none"].includes(icon) && (
            <div className="input-text">
              {type === "text" && <>Input Text</>}

              {type === "placeholder" && <>{text1}</>}
            </div>
          )}

          {["end", "start"].includes(icon) && (
            <Icon className="icon-instance" name="heart" nameHeart="/img/icon-13.png" />
          )}

          {icon === "start" && (
            <div className="div">
              {type === "text" && <>Input Text</>}

              {type === "placeholder" && <>{text1}</>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "placeholder"]),
  label: PropTypes.bool,
  icon: PropTypes.oneOf(["none", "start", "end"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
