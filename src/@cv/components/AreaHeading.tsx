import React from "react";

import { x } from "@xstyled/emotion";

import { pxB, pxH } from "@cv/views/DesignSystem";

/**
 * CV Component: Area Heading (at the top of sections)
 */
const AreaHeading: React.FC<{}> = ({ children }) => {
  return (
    <x.h2
      fontSize={pxB(18)}
      lineHeight={pxH(28)}
      letterSpacing="0"
      textTransform="uppercase"
    >
      {children}
    </x.h2>
  );
};

export default AreaHeading;
