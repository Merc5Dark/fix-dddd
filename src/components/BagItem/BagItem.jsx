/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ProductImage } from "../ProductImage";
import "./style.css";

export const BagItem = ({
  type,
  className,
  productImageImageClassName,
  productImageName = "watch",
  productImageImage,
  productImageNameWatchClassName,
}) => {
  return (
    <div className={`bag-item type-${type} ${className}`}>
      {type === "default" && (
        <>
          <ProductImage className="product-image-instance" name="watch" />
          <div className="text-wrapper-2">Item Name</div>
        </>
      )}

      {type === "icon-only" && (
        <ProductImage
          className={productImageNameWatchClassName}
          image={productImageImage}
          imageClassName={productImageImageClassName}
          name={productImageName}
        />
      )}
    </div>
  );
};

BagItem.propTypes = {
  type: PropTypes.oneOf(["icon-only", "default"]),
  productImageName: PropTypes.string,
  productImageImage: PropTypes.string,
};
