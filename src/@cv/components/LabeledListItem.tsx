import React from "react";

import { x } from "@xstyled/emotion";

import { pxB, pxH, pxW, sizeFromBase } from "@cv/views/DesignSystem";

/**
 * =================================================================
 */
// TODO: Merge the following two components

/**
 * CV Component: Topic Labeled List Item (two lines 2x14px)
 * List item for the topic section.
 */
const TopicLabeledListItem: React.FC<{ label?: string; double?: boolean }> = ({
  label = "Empty Label",
  double = false,
  children = "This is a test to see if the line fits and does wrap to the next line for alignment.",
}) => {
  // TODO: This should be a shared configurable generic labeled list item component.
  return (
    <x.div
      h={sizeFromBase({ double: double })}
      display="flex"
      flexDirection="row"
      pt={double ? pxH(3) : pxH(2)}
      fontSize={pxB(10)}
      lineHeight={pxH(12)}
      /* FIXME: Ellipsis not showing. Overflow text is simply getting clipped */
      textOverflow="ellipsis"
      overflow="hidden"
    >
      <x.div
        fontSize={pxB(8)}
        w={pxW(28)}
        /* FIXME: This 1 vs 2px Remark Margin to align the baseline is not clean
        and can lead to differences between safari vs chrome vs firefox */
        lineHeight={pxH(9)} // <-
        mt={pxW(2)} // <-
        mr={pxW(2)}
        ml={pxW(6)}
        fontWeight="bolder"
        flex="none"
      >
        {label}
      </x.div>
      <x.div>{children}</x.div>
    </x.div>
  );
};

/**
 * CV Component: Remark Labeled List Item (two lines 2x14px)
 * Labeled List item used i.e. in the experience section within the Remark area
 */
const RemarkLabeledListItem: React.FC<{ label?: string; double?: boolean }> = ({
  label = "Empty Label",
  double = false,
  children = "This is a test to see if the line fits and does wrap to the next line for alignment.",
}) => {
  // TODO: This should be a shared configurable generic labeled list item component.
  return (
    <x.div
      h={sizeFromBase({ double: double })}
      display="flex"
      flexDirection="row"
      pt={double ? pxH(3) : pxH(2)}
      fontSize={pxB(10)}
      lineHeight={pxH(12)}
      /* FIXME: Ellipsis not showing. Overflow text is simply getting clipped */
      textOverflow="ellipsis"
      overflow="hidden"
    >
      <x.div
        fontSize={pxB(8)}
        /* TODO: This should depend on the golden ratio since the label pushes content to the right,
        which vertically aligns with the profile summary text block end.  */
        w={pxW(44)}
        /* FIXME: This 1 vs 2px Remark Margin to align the baseline is not clean
        and can lead to differences between safari vs chrome vs firefox */
        lineHeight={pxH(9)} // <-
        mt={pxH(2)} // <-
        mr={pxW(6)}
        fontWeight="bolder"
        flex="none"
      >
        {label}
      </x.div>
      <x.div>{children}</x.div>
    </x.div>
  );
};

/**
 * =================================================================
 */

export { TopicLabeledListItem, RemarkLabeledListItem };
