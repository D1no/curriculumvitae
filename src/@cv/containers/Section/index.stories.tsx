import { ComponentMeta, ComponentStory } from "@storybook/react";

import Record from "@cv/containers/facets/Record";
import { Index as RecordStory } from "@cv/containers/facets/Record/index.stories";

import { default as Component } from "./index";

export default {
  component: Component,
  subcomponents: { Record },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>
    <RecordStory {...RecordStory.args} />
  </Component>
);

export const Index = Template.bind({});
Index.args = {
  heading: "Honours & Media",
};
