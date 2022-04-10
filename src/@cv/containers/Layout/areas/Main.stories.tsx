import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./Main";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component />;

export const Main = Template.bind({});
Main.args = {};
