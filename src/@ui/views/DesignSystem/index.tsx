import {
  Preflight,
  ThemeProvider,
  defaultTheme,
  generateHexAlphaVariants,
} from "@xstyled/emotion";

/**
 * Customized xStyled based theme object used in design system.
 */
export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    // Generates 'hs-gold-a10', 'hs-gold-a20', ...
    ...generateHexAlphaVariants({
      // Adding Color: Hundertschaft "Gold"
      // #B98C18
      "hs-gold": "#B98C18",
      // Like Natural Background
      "doc-bg": "#1e1e1e",
      // Like Natural Overlay
      "doc-overlay": "#0D0C0C",
      // Like Button
      "doc-primary": "#0574E3",
    }),
  },
};

/**
 * Required for any styled outside rendering (like storybook, jest).
 * Higher order component that wraps child components into required theme provider.
 */
const DesignSystem: React.FC = (props) => (
  <ThemeProvider theme={theme}>
    <Preflight />
    {props.children}
  </ThemeProvider>
);

export default DesignSystem;
