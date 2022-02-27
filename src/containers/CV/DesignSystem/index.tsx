import React from "react";

import {
  Preflight,
  ThemeProvider,
  createGlobalStyle,
  defaultTheme,
  generateHexAlphaVariants,
} from "@xstyled/emotion";

import "./latofonts.css";

/**
 * Customized xStyled based theme object used in design system.
 */
export const theme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    cv: `Dinos CV, ${defaultTheme.fonts.sans}`,
  },
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
 * Sets the default font for "cv-page" going forward.
 */
const ApplyFontStyle = createGlobalStyle`
  #cv-page {
    font-family: ${theme.fonts.cv};
    font-weight: ${theme.fontWeights.light};
    font-size: 0.75rem;
  }
`;

interface IDesignSystemProps {}

// TODO: Add react suspense for font loading (maybe not necessary).
// Via Vanilla JS: https://melvingeorge.me/blog/wait-for-fonts-to-load-javascript
// Possible Implementation: https://gist.github.com/HaNdTriX/1ddbcceff65ca375940474faf3430564

/**
 * CV DesignSystem
 * Required for any styled outside rendering (like storybook, jest).
 * Higher order component that wraps child components into required theme provider.
 */
const DesignSystem: React.FC<IDesignSystemProps> = (props) => (
  <ThemeProvider theme={theme}>
    <Preflight />
    <ApplyFontStyle />
    <div id="cv-page">{props.children}</div>
  </ThemeProvider>
);

export default DesignSystem;
