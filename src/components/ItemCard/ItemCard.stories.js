import { ItemCard } from ".";

export default {
  title: "Components/ItemCard",
  component: ItemCard,
  argTypes: {
    orientation: {
      options: ["landscape", "potrait"],
      control: { type: "select" },
    },
    state: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    orientation: "landscape",
    state: "default",
    className: {},
    productImageNameWatchClassName: {},
    text: "Item Name",
    text1: "Small Description",
    text2: "$ 9.99",
    buttonIconNameBagAdd: "/img/icon-22.png",
    productImageName: "watch",
  },
};
