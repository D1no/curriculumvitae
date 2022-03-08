import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { themes } from "@storybook/theming";

import {
  goldenRatioLongContent,
  goldenRatioShort,
} from "@cv/views/DesignSystem";
import DesignSystem from "@cv/views/DesignSystem";

import PaperPreview from "@cv/components/util/PaperPreview.tsx";

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
  },
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

export const decorators = [
  (Story) => (
    <DesignSystem>
      <PaperPreview>
        <Story />
      </PaperPreview>
    </DesignSystem>
  ),
];
