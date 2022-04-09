import React from "react";

import { x } from "@xstyled/emotion";

import {
  goldenRatioContentSpacer,
  goldenRatioPageHeight,
  goldenRatioPageMargin,
  goldenRatioPageWidth,
  pxH,
  pxW,
  theme,
} from "@cv/views/DesignSystem";

interface Paper {
  /**
   * Format of the page.
   */
  size: "A4";
  /**
   * Overwrite dimensions (css string). Props are merged with format. Make use
   * of `pxH()`/`pxW()` instead of direct strings to stay connected to box model scaling.
   */
  overwriteCssSpec?: {
    /**
     * Default page "ink". Css or theme color string.
     */
    textColor?: typeof theme.colors;
    /**
     * Default page "color". Css or theme color string.
     */
    paperBg?: typeof theme.colors;
    width?: ReturnType<typeof pxW>;
    height?: ReturnType<typeof pxH>;
    marginTop?: ReturnType<typeof pxH>;
    marginRight?: ReturnType<typeof pxW>;
    marginBottom?: ReturnType<typeof pxH>;
    marginLeft?: ReturnType<typeof pxW>;
  };
  /**
   * Content of the page.
   */
  children?: React.ReactNode;
}

/**
 * Contains children within a page box format. Real pixel size depends on design system.
 */
const Paper: React.FC<Paper> = ({
  children,
  size,
  overwriteCssSpec: {
    textColor = "page-text-color",
    paperBg = "page-bg-color",
    width,
    height,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  } = {},
}) => {
  // Dimensions for international A4 paper.
  if (size === "A4") {
    width = width || pxW(goldenRatioPageWidth);
    height = height || pxH(goldenRatioPageHeight);
    marginTop = marginTop || pxH(goldenRatioPageMargin);
    marginRight = marginRight || pxW(goldenRatioPageMargin);
    marginBottom = marginBottom || pxH(goldenRatioContentSpacer);
    marginLeft = marginLeft || pxW(goldenRatioPageMargin);
  }

  return (
    <x.div
      bg={paperBg}
      color={textColor}
      /* Page Dimensions */
      w={width}
      h={height}
      /* Page Margin */
      pt={marginTop}
      pr={marginRight}
      pb={marginBottom}
      pl={marginLeft}
    >
      {children}
    </x.div>
  );
};

export default Paper;
