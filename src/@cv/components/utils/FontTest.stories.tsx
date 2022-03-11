import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./FontTest";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component />;

export const FontTest = Template.bind({});
FontTest.args = { title: "Example Inc." };
