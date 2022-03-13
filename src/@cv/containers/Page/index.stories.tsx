import { ComponentMeta, ComponentStory } from "@storybook/react";
import { X } from "lucide-react";

import { default as Component } from "./index";

import { x } from "@xstyled/emotion";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = ({ children, ...args }) => (
  <Component {...args}>
    <x.div bg="gray-200" h="100%">
      <p>{children}</p>
    </x.div>
  </Component>
);

export const Index = Template.bind({});
Index.args = {
  children: "Layout Area",
};
