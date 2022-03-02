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
 * =================================================================
 * BoxModel Utilities. Point for entry to change to relative sizing.
 * =================================================================
 */

/**
 * Utility: Get a height string as a multiple of the grid base height.
 * Defaults to base = 14px.
 */
export const sizeFromBase = ({
  baseLineHeight = 14,
  unit = "px",
  double = false,
  times = 1,
} = {}): string => {
  if (double == false && times == 1) {
    return `${baseLineHeight}${unit}`;
  } else if (double) {
    return `${2 * baseLineHeight * times}${unit}`;
  } else {
    return `${baseLineHeight * times}${unit}`;
  }
};

/**
 * General Pixel — Utility Hock: General pixel sizes
 * (Used to adjust the box model after relationship sizing,
 * since the design is pixel based.)
 */
export const pxB = (px: number): string => {
  // TODO: Connect to relative sizeFromBase calculation to obtain ratios. Should then be converted to static information of the theme for performance reasons.
  return `${px}px`;
};

/**
 * Height Pixel — Utility Hock: Height related pixel sizes.
 * (Used to adjust the box model after relationship sizing,
 * since the design is pixel based.)
 */
export const pxH = (px: number): string => {
  return pxB(px);
};

/**
 * Width Pixel — Utility Hock: Width related pixel sizes.
 * (Used to adjust the box model after relationship sizing,
 * since the design is pixel based.)
 */
export const pxW = (px: number): string => {
  return pxB(px);
};

/**
 * =================================================================
 */

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
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.03em;
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
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <ApplyFontStyle />
      <x.div id="cv-page">{props.children}</x.div>
    </ThemeProvider>
  );
};

export default DesignSystem;
