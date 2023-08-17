import React from "react";
import "./style.css";

import {
  BagItem,
  Button,
  Icon,
  NavLink,
  Navbar,
  ProductImage
} from "../../components"; // Importing components

const ItemView = () => {
  return (
    <div className="item-view">
      <div className="div-2">
        <div className="content-frame">
          <div className="content-area">
            <NavLink
              className="design-component-instance-node"
              expanded
              iconName="chevron-back"
              state="default"
              text="Back"
            />
            <div className="top-area">
              <div className="image-area">
                <div className="image-gallery">
                  {/* ProductImage components */}
                </div>
                <div className="main-image">
                  {/* ProductImage component */}
                </div>
              </div>
              <div className="text-content">
                <header className="header">
                  <div className="text-wrapper-3">Apple Watch</div>
                  <div className="text-wrapper-4">Series 5 SE</div>
                </header>
                <div className="special">
                  <div className="rating">
                    {/* Icon components for stars */}
                  </div>
                  <div className="text-wrapper-5">4.5 / 5</div>
                </div>
                <div className="text-wrapper-6">$ 529.99</div>
                <div className="short-description">
                  <p className="p">
                    {/* Short description text */}
                  </p>
                </div>
                <div className="CTA">
                  <Button
                    className="design-component-instance-node"
                    expanded={false}
                    icon="start"
                    iconName="bag-add"
                    iconNameBagAdd="/img/icon-32.png"
                    size="medium"
                    stateProp="default"
                    style="flat"
                    text="Add to Bag"
                  />
                </div>
              </div>
            </div>
            <div className="bottom-area">
              <img className="line" alt="Line" src="/img/line-2.png" />
              <div className="description">
                <div className="text-wrapper-7">Description</div>
                <p className="lorem-ipsum-dolor">
                  {/* Long description text */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="line-2" alt="Line" src="/img/line-1.png" />
        <div className="bag-area">
          <div className="title">
            <div className="text-wrapper-8">Bag</div>
          </div>
          <div className="bag-items">
            <div className="row">
              {/* BagItem components */}
            </div>
            <div className="row">
              {/* BagItem components */}
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              className="design-component-instance-node"
              expanded={false}
              icon="start"
              iconName="bag-handle"
              iconNameBagHandle="/img/icon-31.png"
              size="medium"
              stateProp="default"
              style="flat"
              text="View Bag"
            />
          </div>
        </div>
        <Navbar className="navbar-instance" state="default" />
      </div>
    </div>
  );
};

export default ItemView;
