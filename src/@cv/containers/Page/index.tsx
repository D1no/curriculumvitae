import React from "react";

import { x } from "@xstyled/emotion";

import {
  goldenRatioContentSpacer,
  goldenRatioPageHeight,
  goldenRatioPageMargin,
  goldenRatioPageWidth,
  pxH,
  pxW,
} from "@cv/views/DesignSystem";

interface Page {
  // TODO: Add format "A4", "Letter"
}

const Page: React.FC<Page> = ({ children, ...props }) => {
  return (
    <x.div
      // TODO: Decide if colors should be over writable / only managed via design system.
      bg="white"
      color="black"
      /* Page Dimensions (A4) */
      w={pxW(goldenRatioPageWidth)}
      h={pxH(goldenRatioPageHeight)}
      /* Trim (A4) */
      px={pxW(goldenRatioPageMargin)}
      pt={pxH(goldenRatioPageMargin)}
      pb={pxH(goldenRatioContentSpacer)}
    >
      {children}
    </x.div>
  );
};

export default Page;
