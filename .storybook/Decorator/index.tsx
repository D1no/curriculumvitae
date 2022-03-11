import React, { useEffect, useState } from "react";

import DesignSystem from "../../src/@cv/views/DesignSystem";
import Paper from "./Paper";

/**
 * Storybook Toolbar
 */
export const DecoratorArgTypes = {
  paper: {
    name: "Paper",
    description: "Displays components in a paper like wrapper.",
    defaultValue: "narrow",
    toolbar: {
      // Available Icons: https://github.com/storybookjs/storybook/blob/7064642e1aee7786c77fe735c064c0c29dbcee01/lib/components/src/icon/icons.tsx
      icon: "document",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "narrow", right: "(narrow)", title: "Section" },
        { value: "wide", right: "(wide)", title: "Content" },
        { value: "full", right: "(full width)", title: "Slice" },
        { value: "responsive", right: "(stretch)", title: "Responsive" },
        { value: "off", right: "(no wrap)", title: "Disable" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

/**
 * Storybook HOC for assigning args and selecting render mode.
 */
const Decorator = (Story, context) => {
  // Getting relevant global props.
  const { paper, backgrounds } = context.globals;

  /**
   * Renders the story with the correct Decorator.
   */
  const RenderStory = () => {
    // Paper Style Story
    if (paper && paper !== "off") {
      return (
        <Paper widthMode={paper} transparent={backgrounds?.grid}>
          <Story />
        </Paper>
      );
    } else {
      // Just Story
      return <Story />;
    }
  };

  return (
    <DesignSystem>
      <RenderStory />
    </DesignSystem>
  );
};

export default Decorator;
