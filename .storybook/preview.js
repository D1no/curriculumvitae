import DesignSystem from "@cv/views/DesignSystem";

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
