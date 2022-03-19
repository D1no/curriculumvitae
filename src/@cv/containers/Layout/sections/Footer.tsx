import React from "react";

import QRCode from "qrcode.react";

import { x } from "@xstyled/emotion";

import {
  goldenRatioContentSpacerPX,
  goldenRatioElementSpacer,
  goldenRatioPageMargin,
  goldenRatioSectionSpacerPX,
  goldenRatioShortPX,
  pxB,
  pxBraw,
  pxH,
  pxW,
  theme,
} from "@cv/views/DesignSystem";

/**
 * Footer of the Page
 */
const Footer: React.FC<{}> = () => {
  const PinDigit: React.FC<{}> = ({ children }) => {
    return (
      <x.span
        display="inline-block"
        h={pxH(11)}
        w={pxH(4)}
        lineHeight={pxB(8)}
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
   * Takes a 6 digit string and returns an inline text format.
   */
  const InlinePin: React.FC<{ sixDigitPinString?: string }> = ({
    sixDigitPinString = "748262",
  }) => {
    if (sixDigitPinString.length !== 6) {
      console.warn(
        "Prop 'sixDigitPinString': Invalid number of digits. Received:",
        sixDigitPinString,
      );

      sixDigitPinString = "------";
    }

    const digitArray = [...sixDigitPinString];

    return (
      <>
        <x.span>Pin </x.span>
        <x.span mx={pxW(1)}>
          <PinDigit>{digitArray[0]}</PinDigit>
          <PinDigit>{digitArray[1]}</PinDigit>
          <PinDigit>{digitArray[2]}</PinDigit>
        </x.span>
        <x.span mx={pxW(1)}>
          <PinDigit>{digitArray[3]}</PinDigit>
          <PinDigit>{digitArray[4]}</PinDigit>
          <PinDigit>{digitArray[5]}</PinDigit>
        </x.span>
        <x.span mr={pxW(2)}>.</x.span>
      </>
    );
  };

  return (
    <x.div
      flexGrow={1}
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      mb={goldenRatioContentSpacerPX}
    >
      {/* Footer Decor */}
      <x.div display="flex" h={pxH(14)} alignItems="center">
        <x.div
          col={goldenRatioShortPX}
          bg="black"
          borderRadius="full"
          h={pxH(1)}
        />
        <x.div col={goldenRatioSectionSpacerPX}>
          <x.svg viewBox="0 0 3 3" w={pxB(3)} h={pxB(3)} mx="auto">
            <circle cx="50%" cy="50%" r={pxBraw(1.5)} />
          </x.svg>
        </x.div>
        <x.div col bg="black" borderRadius="full" h={pxH(1)} />
      </x.div>
      {/* Footer Notes */}
      <x.div
        minH={pxH(goldenRatioPageMargin / 2 - goldenRatioElementSpacer)}
        display="flex"
        spaceX={goldenRatioSectionSpacerPX}
      >
        {/* Left side */}
        <x.div
          col={goldenRatioShortPX}
          display="flex"
          lineHeight={pxB(10)}
          fontSize={pxB(8)}
          spaceX={pxW(6)}
        >
          <x.div
            h={pxB(
              goldenRatioPageMargin / 2 - goldenRatioElementSpacer, // 48
            )}
            col={pxB(
              goldenRatioPageMargin / 2 - goldenRatioElementSpacer, // 48
            )}
            borderRadius="3%"
            overflow="hidden"
          >
            <QRCode
              value="https://cvdrive.link/0c44298fc1c149af"
              renderAs="svg"
              size={
                goldenRatioPageMargin / 2 - goldenRatioElementSpacer // 48
              }
              fgColor={theme.colors["cv-black"]}
            />
          </x.div>
          <x.div col>
            <x.p
              lineHeight={pxB(8)}
              fontSize={pxB(6)}
              color="cv-muted"
              // FIXME: Letter spacing needs to be validated in the whole document as this shows improper CSS inheritance.
              letterSpacing="-0.03em"
            >
              Accessability:{" "}
              <i>Plain Text, Screen Reader, Automatic Processing</i>
              {/* Variant (1 of 3) "Intro Stage: Anonymized One-Pager" */}
            </x.p>
            <x.p
              lineHeight={pxB(10)}
              // pt={pxH(2)}
              fontWeight="bolder"
              color="cv-muted"
              pb={pxH(2)}
            >
              https://cvdrive.link/0c44298fc1c149af
            </x.p>
            <x.p color="cv-decor">
              <InlinePin />
              <i>
                Provided in kind GDPR compliance to “Recruiting Company Inc,
                London-UK”.
              </i>
            </x.p>
          </x.div>
        </x.div>

        {/* Right Side */}
        <x.div col /* bg="gray-200" */ lineHeight={pxB(10)} fontSize={pxB(8)}>
          <x.p
            lineHeight={pxB(8)}
            fontSize={pxB(6)}
            color="cv-muted"
            // FIXME: Letter spacing needs to be validated in the whole document as this shows improper CSS inheritance.
            letterSpacing="-0.03em"
          >
            <i>
              2018-08-11 · Variant (1 of 3) "Intro Stage: Anonymized One-Pager"
            </i>
          </x.p>
          <x.p
            lineHeight={pxB(10)}
            // pt={pxH(2)}
          >
            Section for Notes...
          </x.p>
        </x.div>
      </x.div>
    </x.div>
  );
};

export default Footer;
