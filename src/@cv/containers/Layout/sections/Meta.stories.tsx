import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./Meta";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component />;

export const Meta = Template.bind({});
Meta.args = {};
