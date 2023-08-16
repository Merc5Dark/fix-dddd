import { NavLink } from ".";

export default {
  title: "Components/NavLink",
  component: NavLink,
  argTypes: {
    state: {
      options: ["active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "active",
    expanded: true,
    className: {},
    iconName: "storefront",
    text: "Link",
    iconNameStorefront: "abc",
    iconNameBagHandle: "abc",
    iconNameLogOut: "abc",
  },
};
