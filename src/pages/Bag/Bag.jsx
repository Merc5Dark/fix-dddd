import React from "react";
import "./style.css";

import {
  BagItem,
  Button,
  ItemInBag,
  Navbar
} from "../../components"; // Importing components

const Bag = () => {
  return (
    <div className="bag">
      <div className="div-2">
        <div className="content-frame">
          <div className="header-2">
            <div className="text-wrapper-5">Check your Bag Items</div>
          </div>
          <div className="bag-contents">
            <ItemInBag
              buttonIconNameMinus="/img/icon-32.png"
              buttonIconNamePlus="/img/icon-31.png"
              className="item-in-bag-instance"
              productImageImage="/img/image-28.png"
              productImageImageClassName="item-in-bag-2"
              productImageName="dell-XPS-13-white"
              productImageNameWatchClassName="design-component-instance-node"
              text="Dell XPS 13"
              text1="White"
              text2="$ 1799.99"
            />
            {/* Additional ItemInBag components */}
          </div>
        </div>
        <img className="line" alt="Line" src="/img/line-1.png" />
        <Navbar
          className="navbar-instance"
          navLinksNavLinkIconNameBagHandle="/img/icon-28.png"
          navLinksNavLinkIconNameStorefront="/img/icon-29.png"
          navLinksNavLinkState="active"
          navLinksNavLinkState1="default"
          state="default"
        />
        <div className="bag-area">
          <div className="title">
            <div className="text-wrapper-6">Bag</div>
          </div>
          <div className="bag-items">
            <div className="row">
              {/* BagItem components */}
            </div>
            <div className="row">
              {/* BagItem components */}
            </div>
          </div>
          <div className="CTA">
            <div className="total">
              <div className="text-wrapper-7">Bag Total:</div>
              <div className="text-wrapper-7">$ 5,849.93</div>
            </div>
            <Button
              className="button-2"
              expanded={false}
              icon="start"
              iconName="bag-handle"
              iconNameBagHandle="/img/icon-26.png"
              size="medium"
              stateProp="default"
              style="flat"
              text="Checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
