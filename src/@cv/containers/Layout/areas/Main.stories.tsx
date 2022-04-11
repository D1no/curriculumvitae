import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./Main";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component
    aside={<div style={{ backgroundColor: "#F4F4F4" }}>Aside Column</div>}
  >
    <div style={{ backgroundColor: "#F4F4F4" }}>Main Column</div>
  </Component>
);

export const Main = Template.bind({});
Main.args = {};
