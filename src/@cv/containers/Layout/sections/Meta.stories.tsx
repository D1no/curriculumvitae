import { ComponentMeta, ComponentStory } from "@storybook/react";

import Component from "./Meta";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Meta = Template.bind({});
Meta.args = {
  anonym: false,
  tagLabel: "Keywords",
  tags: [
    "Front-End",
    "Back-End",
    "ReactJS",
    "React-Native",
    "Artificial Intelligence",
    "Node.js",
    "Python",
    "CQRS",
    "Microsoft",
    "Google",
    "Azure",
    "Dask",
    "Ray",
    "Digital Twins",
  ],
  tagsSeparator: ", ",
  tagsEmptyText: "",
};
