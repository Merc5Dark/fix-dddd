/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { ProductImage } from "../ProductImage";
import "./style.css";

export const ItemInBag = ({
  className,
  productImageNameWatchClassName,
  productImageName = "watch",
  productImageImage,
  productImageImageClassName,
  text = "Item Name",
  text1 = "Item Type",
  text2 = "$ 9.99",
  buttonIconNameMinus = "/img/icon-40.png",
  buttonIconNamePlus = "/img/icon-39.png",
  text3 = "1",
}) => {
  return (
    <div className={`item-in-bag ${className}`}>
      <ProductImage
        className={productImageNameWatchClassName}
        image={productImageImage}
        imageClassName={productImageImageClassName}
        name={productImageName}
      />
      <div className="content-area">
        <div className="header">
          <div className="div-wrapper">
            <div className="item-name">{text}</div>
          </div>
          <div className="div-wrapper">
            <div className="item-type">{text1}</div>
          </div>
        </div>
        <div className="small-description">
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
        </div>
        <div className="rating">
          <div className="stars">
            <Icon className="star" name="star" nameStar="/img/star-04-4.png" />
            <Icon className="star" name="star" nameStar="/img/star-04-4.png" />
            <Icon className="star" name="star" nameStar="/img/star-04-4.png" />
            <Icon className="star" name="star" nameStar="/img/star-04-4.png" />
            <Icon className="star" name="star-half" nameStarHalf="/img/star-05-4.png" />
          </div>
          <div className="text-wrapper-2">4.5 / 5</div>
        </div>
        <div className="price-rating">
          <div className="price">
            <div className="text-wrapper-3">{text2}</div>
            <div className="text-wrapper-3">x</div>
            <div className="text-wrapper-3">{text3}</div>
          </div>
          <div className="quantity">
            <div className="price-2">
              <Button
                className="button-instance"
                expanded
                icon="start"
                iconName="minus"
                iconNameMinus={buttonIconNameMinus}
                size="small"
                stateProp="default"
                style="icon"
              />
              <div className="element">{text3}</div>
              <Button
                className="button-instance"
                expanded
                icon="start"
                iconName="plus"
                iconNamePlus={buttonIconNamePlus}
                size="small"
                stateProp="default"
                style="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ItemInBag.propTypes = {
  productImageName: PropTypes.string,
  productImageImage: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  buttonIconNameMinus: PropTypes.string,
  buttonIconNamePlus: PropTypes.string,
  text3: PropTypes.string,
};
