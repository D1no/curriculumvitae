import DesignSystem from "../src/@cv/views/DesignSystem";
import Decorator, { DecoratorArgTypes } from "./Decorator";

import { themes } from "@storybook/theming";

// TODO: Implement some form of automatic title and meta generation. Potentially with CSF 3.0 support
//       https://github.com/storybookjs/storybook/issues/8222#issuecomment-984948162

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true, // TODO: Enable and ensure that all interfaces have comments.
    hideNoControlsWarning: true,
  },
  layout: "fullscreen",
  backgrounds: {
    grid: {
      cellSize: 2,
      opacity: 0.3,
      cellAmount: 7,
      offsetX: 14,
      offsetY: 14,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark },
    // Override the default light theme
    light: { ...themes.normal },
    current: "dark",
  },
};

export const decorators = [Decorator];

export const globalTypes = {
  ...DecoratorArgTypes,
};
