import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./Caption";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Caption = Template.bind({});
Caption.args = {
  children:
    "2015 · Ranked #1 in Russia. Term of courses in finance & teaching programmatic marketing.",
};
