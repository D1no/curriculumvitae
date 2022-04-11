import React from "react";

import { x } from "@xstyled/emotion";

import {
  goldenRatioSectionSpacerPX,
  goldenRatioShortPX,
  pxH,
} from "@cv/views/DesignSystem";

interface Main {
  /**
   * Primary wider column of the page-layout.
   */
  children?: React.ReactNode;
  /**
   * Secondary narrower column of the page-layout.
   */
  aside?: React.ReactNode;
  /**
   * Vertical spacing between the components inside the columns (flex space y). Use `pxH()` to maintain scaling.
   * Default: `pxH(14)`.
   */
  spaceY?: string;
}

/**
 * Renders a main and an aside column each with a row flexbox.
 */
const Main: React.FC<Main> = ({ aside, children, spaceY = pxH(14) }) => (
  <x.div
    display="flex"
    flexDirection="row"
    alignSelf="stretch"
    spaceX={goldenRatioSectionSpacerPX}
    justifyContent="left"
  >
    {/* Secondary Column */}
    <x.div w={goldenRatioShortPX} flex="none" spaceY={spaceY}>
      {aside}
    </x.div>

    {/* Primary Column */}
    <x.div spaceY={pxH(14)}>{children}</x.div>
  </x.div>
);

export default Main;
