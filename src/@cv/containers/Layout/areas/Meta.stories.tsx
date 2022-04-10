import { ComponentMeta, ComponentStory } from "@storybook/react";

import accentureLogo from "@cv/assets/orgLogo/accenture.png";
import googleLogo from "@cv/assets/orgLogo/google.png";
import siemensLogo from "@cv/assets/orgLogo/siemens.png";

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
  contact: {
    phone: "+49123456789",
    email: "sample@email.example",
    locationShort: "City, Country (GMT+1)",
  },
  web: [
    {
      shortName: "Web 1",
      linkSrc: "#",
    },
    {
      shortName: "Web 2",
      linkSrc: "#",
    },
    {
      shortName: "Web 3",
      linkSrc: "#",
    },
  ],
  orgLogos: [
    /* Example Logos Only */
    { imageSrc: googleLogo, orgName: "Google" },
    { imageSrc: accentureLogo, orgName: "Accenture" },
    { imageSrc: siemensLogo, orgName: "Siemens" },
  ],
};
