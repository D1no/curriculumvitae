import React, { useEffect, useState } from "react";

import addons from "@storybook/addons";
import { GLOBALS_UPDATED } from "@storybook/core-events";
import { x } from "@xstyled/emotion";

import {
  globalLineHeight,
  goldenRatioContentSpacer,
  goldenRatioLongContent,
  goldenRatioShort,
  pxB,
} from "@cv/views/DesignSystem";

export interface IPaperPreview {
  /**
   * Preview in Content Width instead of Section Width
   */
  wide: boolean;
}
// get channel from storybook
const channel = addons.getChannel();

/**
 * Storybook Component Decorator
 * Changes background transparency depending on if the background grid
 * is enabled or not.
 */
const PaperPreview: React.FC<IPaperPreview> = ({ children, wide }) => {
  const padding = globalLineHeight;
  const sectionWidth = {
    inner: goldenRatioShort,
    outer: goldenRatioShort + 2 * padding,
  };
  const mainWidth = {
    inner: goldenRatioLongContent,
    outer: goldenRatioLongContent + 2 * padding,
  };
  const width = wide ? mainWidth : sectionWidth;

  // Listen to Storybooks Globals Updated event to set component
  // background transparency lower to see the grid background.

  const [isGrid, setGrid] = useState(false);

  useEffect(() => {
    channel.on(GLOBALS_UPDATED, (event) => {
      // Set Component State
      setGrid(event?.globals?.backgrounds?.grid);
    });

    return () =>
      channel.off(GLOBALS_UPDATED, (event) => {
        // Reset State
        setGrid(event?.globals?.backgrounds?.grid);
      });
  }, [channel, setGrid]);

  return (
    <x.div
      bg={isGrid ? "white-a10" : "white"}
      w={pxB(width.outer)}
      p={pxB(padding)}
      ml={pxB(goldenRatioContentSpacer)}
      mt={pxB(goldenRatioContentSpacer)}
      boxShadow="page"
    >
      <x.div w={pxB(width.inner)} bg={isGrid ? "white-a30" : "white"}>
        {children}
      </x.div>
    </x.div>
  );
};

export default PaperPreview;
