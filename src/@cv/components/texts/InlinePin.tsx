import React from "react";

import { FontSizeProps, LineHeightProps, x } from "@xstyled/emotion";

import { pxB, pxH, pxW } from "@cv/views/DesignSystem";

/**
 * Single pin digit. Props are xStyled props.
 */
interface PinDigit {
  /**
   * Default pxB(8). Theme replacement are applied. Consider using the `pxB` utility.
   */
  fontSize?: FontSizeProps["fontSize"];
  /**
   * Default pxB(8). Theme replacement are applied. Consider using the `pxB` utility.
   */
  lineHeight?: LineHeightProps["lineHeight"];
}

export const PinDigit: React.FC<PinDigit> = ({
  children,
  fontSize = pxB(8),
  lineHeight = pxB(8),
}) => {
  return (
    <x.span
      display="inline-block"
      lineHeight={lineHeight}
      fontSize={fontSize}
      h={pxH(11)}
      w={pxH(4)}
      textAlign="center"
      color="cv-muted"
      mr={pxW(1)}
      letterSpacing="0"
    >
      {children}
    </x.span>
  );
};

/**
 * Renders a six digit pin inline. Empty digits are substituted with the placeholderChar.
 */
interface InlinePin {
  /**
   * Six digit pin as a string.
   * */
  pin?: string;
  /**
   *  Placeholder for empty digits. Default "-".
   * */
  placeholderChar?: string;
  /**
   * Takes specific props to style the individual digit.
   */
  styleDigit?: PinDigit;
}

/**
 * Takes a 6 digit string and returns an inline text format.
 */
const InlinePin: React.FC<InlinePin> = ({
  pin,
  placeholderChar = "-",
  styleDigit,
}) => {
  const digitArray = [...(pin ?? "")];

  return (
    <>
      <x.span mx={pxW(1)}>
        <PinDigit {...styleDigit}>{digitArray[0] ?? placeholderChar}</PinDigit>
        <PinDigit {...styleDigit}>{digitArray[1] ?? placeholderChar}</PinDigit>
        <PinDigit {...styleDigit}>{digitArray[2] ?? placeholderChar}</PinDigit>
      </x.span>
      <x.span mx={pxW(1)}>
        <PinDigit {...styleDigit}>{digitArray[3] ?? placeholderChar}</PinDigit>
        <PinDigit {...styleDigit}>{digitArray[4] ?? placeholderChar}</PinDigit>
        <PinDigit {...styleDigit}>{digitArray[5] ?? placeholderChar}</PinDigit>
      </x.span>
    </>
  );
};

export default InlinePin;
