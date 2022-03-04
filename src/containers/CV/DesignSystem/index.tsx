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

// TODO: After design phase, a histogram needs to be made of all called in pxX sizes for consistency validation and search / replace.

export const globalSizeMultiplier = 1;

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
  if (double === false && times === 1) {
    return `${baseLineHeight * globalSizeMultiplier}${unit}`;
  } else if (double) {
    return `${2 * baseLineHeight * times * globalSizeMultiplier}${unit}`;
  } else {
    return `${baseLineHeight * times * globalSizeMultiplier}${unit}`;
  }
};

/**
 * General Pixel — Utility Hock: General pixel sizes. I.e. Font Size and Line Height.
 * (Used to adjust the box model after relationship sizing,
 * since the design is pixel based.)
 */
export const pxB = (px: number): string => {
  // TODO: Connect to relative sizeFromBase calculation to obtain ratios. Should then be converted to static information of the theme for performance reasons.
  return `${px * globalSizeMultiplier}px`;
};

/**
 * General Base Size in Raw — Utility Hock: General sizes. I.e. SVG etc that don't take units.
 * (Used to adjust the box model after relationship sizing,
 * since the design is pixel based.)
 */
export const pxBraw = (px: number): number => {
  // TODO: Connect to relative sizeFromBase calculation to obtain ratios. Should then be converted to static information of the theme for performance reasons.
  return px * globalSizeMultiplier;
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
 * Document constant for flex box pushing according to golden ratio.
 * Width 544px (34rem at 16px) = Long 366.21 + Short 207.790
 * Short ~208px (=13rem at 16px)
 */

// TODO: This should just be one class object that also caches.

export const goldenRatioGridStep = 8;

export const goldenRatioWhole = 68 * goldenRatioGridStep; // 544px
export const goldenRatioShort = 26 * goldenRatioGridStep; // 208px
export const goldenRatioLong = goldenRatioWhole - goldenRatioShort;

export const goldenRatioPageWidth = 100 * goldenRatioGridStep; // 800px
export const goldenRatioPageHeight = 141.5 * goldenRatioGridStep; // 1132px
export const goldenRatioPageMargin =
  (goldenRatioPageWidth - goldenRatioWhole) / 2; // 128

// Visual space (margin) from short golden ratio to begin of content within long golden ratio.
export const goldenRatioSectionSpacer = 4.5 * goldenRatioGridStep; // 36px
export const goldenRatioContentSpacer = 3.5 * goldenRatioGridStep; // 28px
export const goldenRatioElementSpacer = 2 * goldenRatioGridStep; // 16px

export const goldenRatioLongSection =
  goldenRatioLong - goldenRatioSectionSpacer;
export const goldenRatioLongContent =
  goldenRatioLong - goldenRatioContentSpacer;

// As Pixel
export const goldenRatioShortPX = pxW(goldenRatioShort);
export const goldenRatioLongPX = pxW(goldenRatioLong);

export const goldenRatioSectionSpacerPX = pxW(goldenRatioSectionSpacer);
export const goldenRatioContentSpacerPX = pxW(goldenRatioContentSpacer);
export const goldenRatioElementSpacerPX = pxW(goldenRatioElementSpacer);

export const goldenRatioLongSectionPX = pxW(
  goldenRatioLong - goldenRatioSectionSpacer,
);
export const goldenRatioLongContentPX = pxW(
  goldenRatioLong - goldenRatioContentSpacer,
);

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
      // Muted CV content
      "cv-muted": "#545454",
      // CV Vertical Decor Line
      "cv-decor": "#c4c4c4",
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
