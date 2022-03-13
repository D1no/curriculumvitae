import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./Footer";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component />;

export const Footer = Template.bind({});
Footer.args = {};
