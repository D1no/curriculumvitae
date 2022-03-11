import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LabeledListItemInline as Component } from "./LabeledListItem";

import ElementRemark from "@cv/components/decorators/Remark";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const TopLevelTemplate: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const TopLevel = TopLevelTemplate.bind({});
TopLevel.args = {
  label: "Empty Label",
  double: false,
  children:
    "This is a test to see if the line fits and does wrap to the next line for alignment.",
};

const InlineRemarkTemplate: ComponentStory<typeof Component> = (args) => (
  <ElementRemark body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum vehicula lectus, id vehicula est pharetra ac. Sed fermentum mauris non lorem vulputate.">
    <Component {...args} />
  </ElementRemark>
);
export const InlineRemark = InlineRemarkTemplate.bind({});
InlineRemark.args = TopLevel.args;
