import { Logo } from ".";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    type: {
      options: ["transparent", "flat"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "transparent",
    className: {},
    union: "/img/union-5.png",
  },
};
