import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./Body";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Body = Template.bind({});
Body.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum vehicula lectus, id vehicula est pharetra ac. Sed fermentum mauris non lorem vulputate, ac dictum dui commodo. Nullam ultrices suscipit justo, eu auris",
};
