import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as Component } from "./index";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = ({ children, ...args }) => (
  <Component {...args}>
    <div style={{ backgroundColor: "#F4F4F4", height: "100%" }}>
      <p>{children}</p>
    </div>
  </Component>
);

export const Index = Template.bind({});
Index.args = {
  size: "A4",
  children: "Layout Area",
};
