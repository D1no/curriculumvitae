import { globalLineHeight } from "../src/@cv/views/DesignSystem";
import Decorator, { DecoratorArgTypes } from "./Decorator";

import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
    hideNoControlsWarning: true,
  },
  layout: "fullscreen",
  backgrounds: {
    grid: {
      cellSize: 2,
      opacity: 0.3,
      cellAmount: globalLineHeight / 2,
      offsetX: globalLineHeight,
      offsetY: globalLineHeight,
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
