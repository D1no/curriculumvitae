import React, { useEffect, useState } from "react";

import addons from "@storybook/addons";
import { GLOBALS_UPDATED } from "@storybook/core-events";
// /my-addon/register.js
import { x } from "@xstyled/emotion";

import {
  goldenRatioContentSpacer,
  goldenRatioLongContentPX,
  goldenRatioLongSectionPX,
  goldenRatioShort,
  goldenRatioShortPX,
  pxB,
} from "@cv/views/DesignSystem";

// get channel from storybook
const channel = addons.getChannel();

const PaperPreview: React.FC<{}> = ({ children }) => {
  const [isGrid, setGrid] = useState(false);

  // Listen to Storybooks Globals Updated event to set component
  // background transparency lower to see the grid background.
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
      w={pxB(goldenRatioShort + 2 * 14)}
      p={pxB(14)}
      ml={pxB(goldenRatioContentSpacer)}
      mt={pxB(goldenRatioContentSpacer)}
      boxShadow="page"
    >
      <x.div w={goldenRatioShortPX} bg={isGrid ? "white-a30" : "white"}>
        {children}
      </x.div>
    </x.div>
  );
};

export default PaperPreview;
