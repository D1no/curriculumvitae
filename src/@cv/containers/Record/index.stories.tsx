import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./index";

import PaperPreview from "@cv/components/utils/PaperPreview";

// TODO: Move PaperPreview up into storybook preview.js and use toolbar global args instead.
//       https://storybook.js.org/docs/react/essentials/toolbars-and-globals
const Template: ComponentStory<typeof Component> = (args) => (
  <PaperPreview wide={false}>
    <Component {...args} />
  </PaperPreview>
);

export default {
  title: "TSX Record",
  component: Component,
} as ComponentMeta<typeof Component>;

export const Primary = Template.bind({});
Primary.args = { title: "Example Inc." };
