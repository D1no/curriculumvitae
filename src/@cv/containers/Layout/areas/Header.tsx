import React from "react";

import styled, { css, useColor, x } from "@xstyled/emotion";

import { goldenRatioShortPX, pxB, pxH, pxW } from "@cv/views/DesignSystem";

import profileImage from "@cv/assets/profileImage/01.png";

interface Header {
  /**
   * Anonymized mode. I.e. cover image is substituted for a placeholder.
   */
  anonym?: boolean;
  /**
   * Text shown inside the cover image when Anonymized mode is turned on.
   */
  anonymText?: string;
  /**
   * Name on top of the profile.
   */
  name?: string;
  /**
   * Text under the profile. A clue like "Software Engineer", "Professional XYZ"; semantically anchoring the profile.
   */
  clueLine?: string;
  /**
   * Profile summary written in 3rd person so it can be copy and pasted by recruiters.
   */
  summary?: string;
  /**
   * URI to the profile image. Displayed as the cover image on the top right of the profile.
   */
  profileImageSrc?: string;
}

/**
 * CV Header: Contains the profile information and cover image.
 */
const Header: React.FC<Header> = ({
  anonym = false,
  anonymText = "anonymized version",
  name = "Name Surname",
  clueLine = "Clue Line",
  summary = "Summary text text text text text text text text text. Summary text text text text text text text text text. Summary text text text text text text text text text. Summary text text text text text text text text text. Summary text text text text text text text text text. Summary text text text text text text text text text. ",
  profileImageSrc = profileImage,
}) => {
  /**
   * Profile CoverImage with anonymized function.
   */
  const CoverImage: React.FC<{
    anonym?: boolean;
    imageSrc?: string;
    anonymText?: string;
  }> = ({
    anonym = false,
    anonymText = "anonymized version",
    imageSrc = undefined,
  }) => {
    if (!imageSrc) anonym = true;

    // TODO This needs to be extracted into a higher order component.
    const lightStripe = useColor("white-a100");
    const darkStripe = useColor("cv-decor-a50");
    const messageBg = useColor("white");
    const messageText = darkStripe;

    // Striped Background
    const anonymBgStripeCss = css`
      background: repeating-linear-gradient(
        45deg,
        ${lightStripe},
        ${lightStripe} 2px,
        ${darkStripe} 2px,
        ${darkStripe} 4px
      );
    `;
    /**
     * Shows either an anonymous stripe background or the profile image (if exists)
     */
    const CoverContainer = styled(x.div)`
      ${(p) => {
        if (anonym) {
          return anonymBgStripeCss;
        } else {
          return css`
            background-image: url(${imageSrc});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          `;
        }
      }}
    `;

    return (
      <CoverContainer
        w={goldenRatioShortPX}
        h={pxH(136)}
        flexGrow="1"
        flex="none"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {anonym ? (
          <x.div
            fontWeight="light"
            fontSize={pxB(14)}
            lineHeight={pxB(14)}
            color={messageText}
            bg={messageBg}
            px={pxB(16)}
            py={pxB(4)}
            borderRadius
            fontStyle="italic"
          >
            {anonymText}
          </x.div>
        ) : undefined}
      </CoverContainer>
    );
  };

  return (
    <x.div display="flex" flexDirection="row" alignSelf="stretch">
      <x.div mr={pxW(28)}>
        <x.h1
          fontSize={pxB(18)}
          fontWeight="bolder"
          lineHeight={pxH(20)}
          mb={pxH(4)}
          letterSpacing="0"
        >
          {name}
        </x.h1>
        <x.p
          fontSize={pxB(12)}
          lineHeight={pxH(12)}
          mb={pxH(4)}
          letterSpacing="0"
        >
          {clueLine}
        </x.p>
        <x.p
          fontSize={pxB(12)}
          lineHeight={pxH(14)}
          my={pxH(12)}
          letterSpacing="-0.03em"
          textAlign="justify"
          fontStyle="italic"
        >
          {summary}
        </x.p>
      </x.div>
      <CoverImage
        anonym={anonym}
        anonymText={anonymText}
        imageSrc={profileImageSrc}
      />
    </x.div>
  );
};

export default Header;
