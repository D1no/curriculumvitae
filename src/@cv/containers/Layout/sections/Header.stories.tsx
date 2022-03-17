import { ComponentMeta, ComponentStory } from "@storybook/react";

import profileImage from "@cv/assets/profileImage/01.png";

import Component from "./Header";

export default {
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Header = Template.bind({});
Header.args = {
  anonym: false,
  profileImageSrc: profileImage,
};
