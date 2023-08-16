import React from "react";
import "./style.css";

import {
  BagItem,
  Button,
  Input,
  ItemCard,
  Navbar
} from "../../components"; // Importing components

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div-2">
        <div className="content-frame">
          <div className="top-bar">
            <Input
              className="input-instance"
              icon="none"
              label
              text="Search Item"
              text1="Apple Watch, Samsung S21, Macbook Pro, ..."
              type="placeholder"
            />
          </div>
          <div className="content-area">
            <div className="row">
              <ItemCard
                buttonIconNameBagAdd="/img/icon-8.png"
                className="item-card-instance"
                orientation="potrait"
                productImageNameWatchClassName="design-component-instance-node"
                state="default"
                text="Apple Watch"
                text1="Series 5 SE"
                text2="$ 529.99"
              />
              {/* Additional ItemCard components */}
            </div>
            <div className="row-2">
              {/* Additional ItemCard components */}
            </div>
          </div>
        </div>
        <img className="line" alt="Line" src="/img/line-1.png" />
        <div className="bag-area">
          <div className="title">
            <div className="text-wrapper-5">Bag</div>
          </div>
          <div className="bag-items">
            <div className="row-3">
              {/* BagItem components */}
            </div>
            <div className="row-3">
              {/* BagItem components */}
            </div>
          </div>
          <div className="CTA">
            <Button
              className="design-component-instance-node-2"
              expanded={false}
              icon="start"
              iconName="bag-handle"
              iconNameBagHandle="/img/icon-4.png"
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

export default Dashboard;
