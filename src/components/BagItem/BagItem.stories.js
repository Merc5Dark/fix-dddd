import { BagItem } from ".";

export default {
  title: "Components/BagItem",
  component: BagItem,
  argTypes: {
    type: {
      options: ["icon-only", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "icon-only",
    className: {},
    productImageImageClassName: {},
    productImageName: "watch",
    productImageImage: "abc",
    productImageNameWatchClassName: {},
  },
};
