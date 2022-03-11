import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./Remark";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Remark = Template.bind({});
Remark.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum vehicula lectus, id vehicula est pharetra ac. Sed fermentum mauris non lorem vulputate.",
};
