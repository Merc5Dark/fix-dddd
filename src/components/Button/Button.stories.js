import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    style: {
      options: ["icon", "text", "border", "flat"],
      control: { type: "select" },
    },
    icon: {
      options: ["none", "start"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "icon",
    icon: "none",
    stateProp: "hover",
    size: "medium",
    expanded: true,
    className: {},
    iconNameBagAdd: "abc",
    iconName: "cart",
    text: "Button",
    iconNameBagHandle: "abc",
  },
};
