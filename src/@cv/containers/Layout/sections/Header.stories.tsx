import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./Header";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component />;

export const Header = Template.bind({});
Header.args = {};
