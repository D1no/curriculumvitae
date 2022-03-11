import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./Heading";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Heading = Template.bind({});
Heading.args = {
  children: "Experience",
};
