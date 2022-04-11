import React from "react";

import { x } from "@xstyled/emotion";

import Heading from "@cv/components/texts/Heading";

interface Section {
  /**
   * Heading title of the section.
   */
  heading?: string;
  /**
   * The section is default rendered as html `section`. Use the `as` prop to name the section. I.e. `as="main"`. This influences screen readers (!).
   */
  as?: React.ElementType;
  /**
   * Component facets to be rendered.
   */
  children?: React.ReactNode;
}

/**
 * Returns a section as a group of facets with group title. I.e. "Experience" ... list of experiences.
 */
const Section: React.FC<Section> = ({
  children,
  heading = "Group Title",
  as,
}) => {
  return (
    <x.section as={as}>
      <Heading>{heading}</Heading>
      {children}
    </x.section>
  );
};

export default Section;
