import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./FontTest";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const FontTest = Template.bind({});
FontTest.args = { sampleText: "This is a font demo." };
