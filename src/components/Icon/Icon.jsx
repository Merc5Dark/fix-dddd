/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Icon = ({
  name,
  className,
  nameStar = "/img/name-star.png",
  nameStarHalf = "/img/name-star-half.png",
  nameBagAdd = "/img/name-bag-add.png",
  nameBagHandle = "/img/name-bag-handle.png",
  nameMenu = "/img/name-menu.png",
  nameStorefront = "/img/name-storefront.png",
  nameLogOut = "/img/name-log-out.png",
  nameCart = "/img/name-cart.png",
  nameClose = "/img/name-close.png",
}) => {
  return (
    <img
      className={`icon ${className}`}
      alt="Name heart"
      src={
        name === "cart"
          ? nameCart
          : name === "storefront"
          ? nameStorefront
          : name === "log-out"
          ? nameLogOut
          : name === "close"
          ? nameClose
          : name === "menu"
          ? nameMenu
          : name === "save"
          ? "/img/name-save.png"
          : name === "list"
          ? "/img/name-list.png"
          : name === "bag-add"
          ? nameBagAdd
          : name === "bag-handle"
          ? nameBagHandle
          : name === "star"
          ? nameStar
          : name === "star-outline"
          ? "/img/name-star-outline.png"
          : name === "star-half"
          ? nameStarHalf
          : name === "chevron-back"
          ? "/img/name-chevron-back.png"
          : name === "minus"
          ? "/img/name-minus.png"
          : name === "plus"
          ? "/img/name-plus.png"
          : name === "gift"
          ? "/img/name-gift.png"
          : name === "calendar-number"
          ? "/img/name-calendar-number.png"
          : name === "card"
          ? "/img/name-card.png"
          : name === "lock-closed"
          ? "/img/name-lock-closed.png"
          : "/img/icon-18.png"
      }
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    "cart",
    "list",
    "star-half",
    "card",
    "log-out",
    "bag-handle",
    "close",
    "heart",
    "save",
    "bag-add",
    "minus",
    "chevron-back",
    "calendar-number",
    "storefront",
    "star",
    "gift",
    "menu",
    "star-outline",
    "plus",
    "lock-closed",
  ]),
  nameStar: PropTypes.string,
  nameStarHalf: PropTypes.string,
  nameBagAdd: PropTypes.string,
  nameBagHandle: PropTypes.string,
  nameMenu: PropTypes.string,
  nameStorefront: PropTypes.string,
  nameLogOut: PropTypes.string,
  nameCart: PropTypes.string,
  nameClose: PropTypes.string,
};
