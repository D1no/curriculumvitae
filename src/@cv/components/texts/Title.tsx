import React, { PropsWithChildren } from "react";

import { x } from "@xstyled/emotion";

import { pxB, pxBraw, pxH, pxW } from "@cv/views/DesignSystem";

/**
 * CV Component: Element Header. Use
 */
const Title: React.FC<PropsWithChildren<{ subtitle?: string }>> = ({
  children,
  subtitle,
}) => {
  /**
   * Renders small text next to title.
   */
  const renderSubtitle = (content: typeof subtitle = subtitle) => {
    if (!content) return;

    return (
      <x.span fontSize={pxB(12)} fontWeight="light" ml={pxW(1)}>
        {" " /* <- Needed for screen readers. */}
        {content}
      </x.span>
    );
  };

  const renderDecorOr = (content: typeof children) => {
    if (content) return content;

    return (
      <x.span
        w={pxW(14)}
        display="inline-block"
        textAlign="center"
        /* debug */
        /* bg="yellow-200" */
      >
        <x.svg viewBox="0 0 3 3" w={pxB(3)} h={pxB(3)} display="inline-block">
          <circle cx="50%" cy="50%" r={pxBraw(1.5)} />
        </x.svg>
      </x.span>
    );
  };

  return (
    <x.h3
      h={pxH(28)}
      fontSize={pxB(16)}
      lineHeight={pxH(28)}
      fontWeight="normal"
    >
      {renderDecorOr(children)}
      {renderSubtitle()}
    </x.h3>
  );
};

export default Title;
