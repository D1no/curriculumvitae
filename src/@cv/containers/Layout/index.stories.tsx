import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as Component } from "./index";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component
    {...args}
    header={<div style={{ backgroundColor: "#F4F4F4" }}>Header Section</div>}
    subHeader={
      <div style={{ backgroundColor: "#F4F4F4" }}>SubHeader Section</div>
    }
    footer={<div style={{ backgroundColor: "#F4F4F4" }}>Footer Section</div>}
  >
    <div style={{ backgroundColor: "#F4F4F4" }}>Main/Children Section</div>
  </Component>
);

export const Index = Template.bind({});
Index.args = {
  headerLabel: "Profile",
  subHeaderLabel: "Keywords & Contact",
  mainLabel: "Overview",
  footerLabel: "Export & Footnotes",
};
