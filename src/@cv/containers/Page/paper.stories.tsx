import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as Component } from "./paper";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>
    <div style={{ backgroundColor: "#F4F4F4", height: "100%" }}>
      Content "Print" Area
    </div>
  </Component>
);

// BUG: Storybook docs addon / docgen doesn't generate markdown from interfaces for some reason. Typescript intellisense works without a problem.
export const Paper = Template.bind({});
Paper.args = {
  size: "A4",
};
