import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./index";

const primaryName = "TSX Record";
const primaryArgs = { title: "Example Inc." };

export default {
  title: primaryName,
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Primary = Template.bind({});
Primary.storyName = primaryName;
Primary.args = primaryArgs;
