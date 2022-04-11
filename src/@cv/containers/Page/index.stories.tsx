import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as Component } from "./index";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = ({ children, ...args }) => (
  <Component {...args} />
);

export const Index = Template.bind({});
Index.args = {
  size: "A4",
};
