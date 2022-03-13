import React from "react";

import { default as CVDesignSystem } from "../../src/@cv/views/DesignSystem";
import { default as UIDesignSystem } from "../../src/@ui/views/DesignSystem";
import Paper from "./Paper";

/**
 * Storybook Toolbar
 */
export const DecoratorArgTypes = {
  /**
   * Paper Preview
   * Render Story in a paper like wrapper.
   */
  paper: {
    name: "Paper",
    description:
      "Displays components in a paper like wrapper. Some components are not effected.",
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
 * Storybook HOC for assigning args and selecting render modes.
 */
const Decorator = (Story, context) => {
  // Storybook context.
  const { fileName } = context.parameters;

  /**
   * Maps stories locations and globals to the correct Decorator Style.
   */
  const RenderStory = () => {
    if (fileName.includes("@cv")) {
      /**
       * =================================================================
       * "@CV" Stories
       * =================================================================
       */
      const { paper, backgrounds } = context.globals;

      if (paper && paper !== "off") {
        /**
         * Paper Preview
         * Render Story in a paper like wrapper.
         */
        let mode = paper;

        // In case of page component, use private render mode (margin only).
        if (fileName.toLowerCase().includes("page/")) mode = "page";

        // Disable some width formats for components that are not meant to be
        // multi-purpose contained.
        if (
          fileName.toLowerCase().includes("views/") ||
          fileName.toLowerCase().includes("layout/")
        ) {
          mode = mode === "narrow" ? "full" : mode;
          mode = mode === "wide" ? "full" : mode;
        }

        return (
          <CVDesignSystem>
            <Paper widthMode={mode} transparent={backgrounds?.grid}>
              <Story />
            </Paper>
          </CVDesignSystem>
        );
      } else {
        /**
         * No Decorator. Provide folders design system.
         */
        return (
          <CVDesignSystem>
            <Story />
          </CVDesignSystem>
        );
      }
    } else if (fileName.includes("@ui")) {
      /**
       * =================================================================
       * "@UI" Stories
       * =================================================================
       */

      /**
       * No Decorator. Provide folders design system.
       */
      return (
        <UIDesignSystem>
          <Story />
        </UIDesignSystem>
      );
    } else {
      /**
       * =================================================================
       * Other Stories
       * =================================================================
       */
      return <Story />;
    }
  };

  return <RenderStory />;
};

export default Decorator;
