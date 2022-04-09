import React, { PropsWithChildren } from "react";

import { x } from "@xstyled/emotion";

import { pxH, sizeFromBase } from "@cv/views/DesignSystem";

/**
 * CV Component: Caption. The small text usually under titles.
 */
const Caption: React.FC<
  PropsWithChildren<{
    double?: boolean;
  }>
> = ({ double = false, children }) => {
  return (
    <x.div
      h={sizeFromBase({ double: double })}
      pt={double ? pxH(2) : pxH(3)}
      pb={double ? pxH(2) : pxH(1)}
      display="flex"
      flexDirection="column"
      /* Debug */
      /* bg="yellow-300" */
    >
      <x.p
        fontSize={pxH(10)}
        lineHeight={double ? pxH(12) : pxH(10)}
        textAlign="justify"
        /* FIXME: Ellipsis not showing. Overflow text is simply getting clipped */
        textOverflow="ellipsis"
        overflow="hidden"
        /* Debug */
        /* bg="blue-200" */
      >
        {children}
      </x.p>
    </x.div>
  );
};

export default Caption;
