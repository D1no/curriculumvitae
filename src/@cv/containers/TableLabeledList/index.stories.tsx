import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./index";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Index = Template.bind({});
Index.args = {};
