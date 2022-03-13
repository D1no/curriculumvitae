import React from "react";

import { x } from "@xstyled/emotion";

import { pxB, pxH, pxW } from "@cv/views/DesignSystem";

interface Remark {
  /**
   * Text content leading the remark. Above child components.
   */
  body?: string;
  small?: boolean;
}

const Remark: React.FC<Remark> = ({ body, small = false, children }) => {
  return (
    <x.div display="flex">
      {/* Left Decor Section */}
      <x.div
        w={pxW(14)}
        flexShrink="0"
        py={pxH(2)}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* Vertical Line next to content. Can't directly use SVG as
          background image in CRA, so this will do. */}
        <x.div
          bg="cv-decor"
          flexGrow="1"
          w={pxW(1)}
          borderRadius="full"
        ></x.div>
      </x.div>
      <x.div
        color="cv-muted"
        lineHeight={pxB(14)}
        fontSize={small ? pxB(10) : pxB(12)}
      >
        {body ? <x.div textAlign="justify">{body}</x.div> : undefined}
        {children}
      </x.div>
    </x.div>
  );
};

export default Remark;
