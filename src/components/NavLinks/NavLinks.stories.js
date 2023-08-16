import { NavLinks } from ".";

export default {
  title: "Components/NavLinks",
  component: NavLinks,
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
    navLinkStateDefaultClassName: {},
    logoUnion: "abc",
    iconNameClose: "/img/icon-15.png",
    navLinkIconNameStorefront: "/img/icon-16.png",
    navLinkIconNameBagHandle: "/img/icon-17.png",
    navLinkStateDefaultClassNameOverride: {},
  },
};
