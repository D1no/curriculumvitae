import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { themes } from "@storybook/theming";

import {
  goldenRatioLongContent,
  goldenRatioShort,
} from "@cv/views/DesignSystem";
import DesignSystem from "@cv/views/DesignSystem";

// TODO: Add ViewPort as Page Segments
//       https://storybook.js.org/docs/react/essentials/viewport#add-new-devices

const pageSegmentView = {
  pageNarrow: {
    name: "CV Section",
    styles: {
      width: `${goldenRatioShort}px`,
      height: `${goldenRatioShort * 1.5}px`,
    },
  },
  pageWide: {
    name: "CV Content",
    styles: {
      width: `${goldenRatioLongContent}px`,
      height: `${goldenRatioShort * 1.5}px`,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  viewport: {
    viewports: { ...pageSegmentView, ...MINIMAL_VIEWPORTS },
    defaultViewport: "pageNarrow",
  },
  backgrounds: {
    default: "light",
    grid: {
      cellSize: 14,
      opacity: 0.2,
      cellAmount: 2,
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

export const decorators = [
  (Story) => (
    <DesignSystem>
      <Story />
    </DesignSystem>
  ),
];
