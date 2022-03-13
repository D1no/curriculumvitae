import React from "react";

import {
  globalLineHeight,
  goldenRatioContentSpacer,
  goldenRatioLongContent,
  goldenRatioShort,
  goldenRatioWhole,
  pxB,
} from "../../src/@cv/views/DesignSystem";

import { x } from "@xstyled/emotion";

interface Paper {
  /**
   * Modes for paper display.
   */
  widthMode: false | "narrow" | "wide" | "full";
  /**
   * Reduce background opacity i.e. to see render backgrounds / grids.
   */
  transparent?: true | false;
  /**
   * Padding around component. Defaults to globalLineHeight.
   */
  outerPadding?: number | undefined;
}

/**
 *
 */
export type paperWidth = {
  inner?: number;
  outer?: number;
};

/**
 * Storybook Component Decorator
 * Changes background transparency depending on if the background grid
 * is enabled or not.
 */
const Paper: React.FC<Paper> = ({
  children,
  widthMode,
  transparent,
  outerPadding = globalLineHeight,
}) => {
  const paperWidth: paperWidth = {};

  // Select render style
  switch (widthMode) {
    case "narrow": {
      // Section Width
      paperWidth.inner = goldenRatioShort;
      paperWidth.outer = goldenRatioShort + 2 * outerPadding;
      break;
    }
    case "wide": {
      // Main Content Width
      paperWidth.inner = goldenRatioLongContent;
      paperWidth.outer = goldenRatioLongContent + 2 * outerPadding;
      break;
    }
    case "full": {
      // Full Vertical Slice
      paperWidth.inner = goldenRatioWhole;
      paperWidth.outer = goldenRatioWhole + 2 * outerPadding;
      break;
    }
    default: {
      // Responsive
      break;
    }
  }

  return (
    <x.div
      bg={transparent ? "white-a10" : "white"}
      w={pxB(paperWidth.outer)}
      p={pxB(outerPadding)}
      m={pxB(goldenRatioContentSpacer)}
      boxShadow="page"
    >
      <x.div w={pxB(paperWidth.inner)} bg={transparent ? "white-a30" : "white"}>
        {children}
      </x.div>
    </x.div>
  );
};

export default Paper;
