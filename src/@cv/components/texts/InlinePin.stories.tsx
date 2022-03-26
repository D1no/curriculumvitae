import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as Component } from "./InlinePin";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const InlinePin = Template.bind({});
InlinePin.args = {
  pin: "12345",
};
