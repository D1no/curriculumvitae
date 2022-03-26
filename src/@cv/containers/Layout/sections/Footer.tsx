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

import InlinePin from "@cv/components/texts/InlinePin";

interface Footer {}

/**
 * Footer of the Page
 */
const Footer: React.FC<Footer> = () => {
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
              <x.span fontSize={pxB(8)}>Pin </x.span>
              <InlinePin pin="123456" />
              <x.span mr={pxW(2)}>.</x.span>
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
