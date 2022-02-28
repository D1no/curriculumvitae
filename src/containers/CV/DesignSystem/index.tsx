import React from "react";

import {
  Preflight,
  ThemeProvider,
  createGlobalStyle,
  generateHexAlphaVariants,
  x,
} from "@xstyled/emotion";

import defaultThemeBoxModel from "./defaultThemeBoxModel";
import "./latofonts.css";

/**
 * Customized xStyled based theme object used in design system.
 */
export const theme = {
  ...defaultThemeBoxModel,
  fonts: {
    ...defaultThemeBoxModel.fonts,
    cv: `Dinos CV, ${defaultThemeBoxModel.fonts.sans}`,
  },
  shadows: {
    ...defaultThemeBoxModel.shadows,
    page: "0 3px 3px rgb(0 0 0 / 5%)",
  },
  colors: {
    ...defaultThemeBoxModel.colors,
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
    font-size: 8px;
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
const DesignSystem: React.FC<IDesignSystemProps> = (props) => {
  console.dir(theme);

  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <ApplyFontStyle />
      <x.div id="cv-page" display="flex">
        {props.children}
      </x.div>
    </ThemeProvider>
  );
};

export default DesignSystem;
