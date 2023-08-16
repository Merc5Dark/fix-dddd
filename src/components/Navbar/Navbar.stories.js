import { Navbar } from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    state: {
      options: ["expanded", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "expanded",
    className: {},
  },
};
