import React, { PropsWithChildren } from "react";

import { x } from "@xstyled/emotion";

import { pxB, pxH } from "@cv/views/DesignSystem";

/**
 * CV Component: Area Heading (at the top of sections)
 */
const Heading: React.FC<PropsWithChildren<{}>> = ({ children }) => {
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

export default Heading;
