/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProductImage = ({ name, className, imageClassName, image = "/img/image-19.png" }) => {
  return (
    <div className={`product-image ${name} ${className}`}>
      {[
        "dell-XPS-13-black",
        "dell-XPS-13-white",
        "dell-XPS-15-black",
        "samsung-note21",
        "samsung-s21-pro",
        "samsung-s21",
      ].includes(name) && (
        <img
          className={`image ${imageClassName}`}
          alt="Image"
          src={
            name === "samsung-s21"
              ? "/img/image-15.png"
              : name === "samsung-note21"
              ? "/img/image-16.png"
              : name === "dell-XPS-15-black"
              ? "/img/image-17.png"
              : name === "dell-XPS-13-black"
              ? "/img/image-18.png"
              : name === "dell-XPS-13-white"
              ? image
              : "/img/image-14.png"
          }
        />
      )}
    </div>
  );
};

ProductImage.propTypes = {
  name: PropTypes.oneOf([
    "dell-XPS-15-black",
    "samsung-s21",
    "iphone-12-03",
    "iphone-13-pro-01",
    "iphone-12-pro-02",
    "samsung-note21",
    "headphones",
    "dell-XPS-13-black",
    "watch",
    "iphone-13-pro-02",
    "iphone-12-02",
    "iphone-12-04",
    "dell-XPS-13-white",
    "iphone-12-01",
    "macbook",
    "iphone-13-pro-03",
    "samsung-s21-pro",
    "iphone-12-pro-01",
  ]),
  image: PropTypes.string,
};
