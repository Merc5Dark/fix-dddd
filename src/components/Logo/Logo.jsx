/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({ type, className, union = "/img/union-5.png" }) => {
  return (
    <div className={`logo ${type} ${className}`}>
      <div className="overlap-group">
        {type === "transparent" && (
          <>
            <img className="union" alt="Union" src="/img/union-4.png" />
            <div className="rectangle" />
            <div className="rectangle-2" />
          </>
        )}

        {type === "flat" && (
          <div className="overlap-group-2">
            <img className="img" alt="Union" src={union} />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
          </div>
        )}
      </div>
    </div>
  );
};

Logo.propTypes = {
  type: PropTypes.oneOf(["transparent", "flat"]),
  union: PropTypes.string,
};
