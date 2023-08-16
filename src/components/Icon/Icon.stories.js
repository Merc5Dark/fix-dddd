import { Icon } from ".";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      options: [
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
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    name: "cart",
    className: {},
    nameStar: "/img/name-star.png",
    nameStarHalf: "/img/name-star-half.png",
    nameBagAdd: "/img/name-bag-add.png",
    nameBagHandle: "/img/name-bag-handle.png",
    nameMenu: "/img/name-menu.png",
    nameStorefront: "/img/name-storefront.png",
    nameLogOut: "/img/name-log-out.png",
    nameCart: "/img/name-cart.png",
    nameClose: "/img/name-close.png",
  },
};
