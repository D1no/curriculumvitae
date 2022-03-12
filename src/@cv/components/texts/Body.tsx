import React from "react";

import { x } from "@xstyled/emotion";

import { pxB, pxH } from "@cv/views/DesignSystem";

/**
 * CV Component: Topic Body
 */
const Body: React.FC<{}> = ({ children }) => {
  return (
    <x.p fontSize={pxB(12)} lineHeight={pxH(14)} textAlign="justify">
      {children}
    </x.p>
  );
};

export default Body;
