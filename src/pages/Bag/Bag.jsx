import React from "react";
import "./style.css";
import { BagItem } from "../../components/BagItem";
import { Button } from "../../components/Button";
import { ItemInBag } from "../../components/ItemInBag";
import { Navbar } from "../../components/Navbar";

const Bag = () => {
  return (
    <div className="bag">
      <div className="bag-content">
        <div className="bag-header">
          <div className="bag-title">Check your Bag Items</div>
        </div>
        <div className="bag-items-container">
          <BagItems />
        </div>
        <img className="line" alt="Line" src="/img/line-1.png" />
        <NavbarComponent />
        <BagArea />
      </div>
    </div>
  );
};

const BagItems = () => {
  return (
    <div className="bag-items">
      <BagItemInstance
        productImageImage="/img/image-7.png"
        productImageName="dell-XPS-13-white"
        text="Dell XPS 13"
        text1="White"
        text2="$ 1799.99"
      />
      <BagItemInstance
        productImageName="iphone-12-pro-02"
        text="Iphone 11"
        text1="Navy Blue"
        text2="$ 729.99"
        text3="3"
      />
      {/* More BagItemInstance components */}
    </div>
  );
};

const BagItemInstance = ({
  productImageImage,
  productImageName,
  text,
  text1,
  text2,
  text3,
}) => {
  return (
    <ItemInBag
      buttonIconNameMinus="/img/icon-7.png"
      buttonIconNamePlus="/img/icon-6.png"
      className="item-in-bag-instance"
      productImageImage={productImageImage}
      productImageNameWatchClassName={`item-in-bag-${productImageName}`}
      text={text}
      text1={text1}
      text2={text2}
      text3={text3}
    />
  );
};

const NavbarComponent = () => {
  return (
    <Navbar
      className="navbar-instance"
      navLinksNavLinkIconNameBagHandle="/img/icon-3.png"
      navLinksNavLinkIconNameStorefront="/img/icon-4.png"
      navLinksNavLinkState="active"
      navLinksNavLinkState1="default"
      state="default"
    />
  );
};

const BagArea = () => {
  return (
    <div className="bag-area">
      <div className="bag-title">Bag</div>
      <BagItemSummaryRow />
      {/* More BagItemSummaryRow components */}
      <div className="CTA">
        <div className="total">
          <div className="text-wrapper-7">Bag Total:</div>
          <div className="text-wrapper-7">$ 5,849.93</div>
        </div>
        <ButtonComponent />
      </div>
    </div>
  );
};

const BagItemSummaryRow = () => {
  return (
    <div className="row">
      <BagItemInstance productImageName="iphone-12-01" text="Iphone 11" text1="Serious Black" text2="$ 619.99" text3="2" />
    </div>
  );
};

const ButtonComponent = () => {
  return (
    <Button
      className="button-2"
      expanded={false}
      icon="start"
      iconName="bag-handle"
      iconNameBagHandle="/img/icon-1.png"
      size="medium"
      stateProp="default"
      style="flat"
      text="Checkout"
    />
  );
};

export default Bag;
