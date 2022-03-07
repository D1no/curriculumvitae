import DesignSystem from "@cv/views/DesignSystem";

// TODO: Add ViewPort as Page Segments
//       https://storybook.js.org/docs/react/essentials/viewport#add-new-devices
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    grid: {
      cellSize: 14,
      opacity: 0.5,
      cellAmount: 4,
      offsetX: 16,
      offsetY: 16,
    },
  },
};

export const decorators = [
  (Story) => (
    <DesignSystem>
      <Story />
    </DesignSystem>
  ),
];
