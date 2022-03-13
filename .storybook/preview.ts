import { globalLineHeight } from "../src/@cv/views/DesignSystem";
import Decorator, { DecoratorArgTypes } from "./Decorator";

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
    default: "dark",
    grid: {
      cellSize: 2,
      opacity: 0.3,
      cellAmount: globalLineHeight / 2,
      offsetX: globalLineHeight,
      offsetY: globalLineHeight,
    },
  },
};

export const decorators = [Decorator];

export const globalTypes = {
  ...DecoratorArgTypes,
};
