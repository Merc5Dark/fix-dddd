/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { ProductImage } from "../ProductImage";
import "./style.css";

export const ItemCard = ({
  orientation,
  state,
  className,
  productImageNameWatchClassName,
  text = "Item Name",
  text1 = "Small Description",
  text2 = "$ 9.99",
  buttonIconNameBagAdd = "/img/icon-22.png",
  productImageName = "watch",
}) => {
  return (
    <div className={`item-card ${orientation} ${className}`}>
      <div className="product-image-wrapper">
        <ProductImage className={productImageNameWatchClassName} name={productImageName} />
      </div>
      <div className="content">
        <div className="item-name">{text}</div>
        <div className="small-description">{text1}</div>
        <div className="action">
          <div className="element">{text2}</div>
          <Button
            className="button-instance"
            expanded
            icon="start"
            iconName="bag-add"
            iconNameBagAdd={buttonIconNameBagAdd}
            size="small"
            stateProp="default"
            style="flat"
          />
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  orientation: PropTypes.oneOf(["landscape", "potrait"]),
  state: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  buttonIconNameBagAdd: PropTypes.string,
  productImageName: PropTypes.string,
};
