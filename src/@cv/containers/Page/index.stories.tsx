import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as Component } from "./index";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = ({ children, ...args }) => (
  <Component {...args}>
    <div style={{ backgroundColor: "lightgray", height: "100%" }}>
      <p>{children}</p>
    </div>
  </Component>
);

export const Index = Template.bind({});
Index.args = {
  children: "Layout Area",
};
