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
};

export const decorators = [
  (Story) => (
    <DesignSystem>
      <Story />
    </DesignSystem>
  ),
];
