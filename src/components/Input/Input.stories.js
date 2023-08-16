import { Input } from ".";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      options: ["text", "placeholder"],
      control: { type: "select" },
    },
    icon: {
      options: ["none", "start", "end"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "text",
    label: true,
    icon: "none",
    className: {},
    text: "Label",
    text1: "Placeholder",
  },
};
