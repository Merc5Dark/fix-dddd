import { ProductImage } from ".";

export default {
  title: "Components/ProductImage",
  component: ProductImage,
  argTypes: {
    name: {
      options: [
        "dell-XPS-15-black",
        "samsung-s21",
        "iphone-12-03",
        "iphone-13-pro-01",
        "iphone-12-pro-02",
        "samsung-note21",
        "headphones",
        "dell-XPS-13-black",
        "watch",
        "iphone-13-pro-02",
        "iphone-12-02",
        "iphone-12-04",
        "dell-XPS-13-white",
        "iphone-12-01",
        "macbook",
        "iphone-13-pro-03",
        "samsung-s21-pro",
        "iphone-12-pro-01",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    name: "dell-XPS-15-black",
    className: {},
    imageClassName: {},
    image: "/img/image-19.png",
  },
};
