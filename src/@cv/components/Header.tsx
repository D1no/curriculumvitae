import React from "react";

import styled, { css, useColor, x } from "@xstyled/emotion";

import { goldenRatioShortPX, pxB, pxH, pxW } from "@cv/views/DesignSystem";

import profileImage from "@cv/assets/profileImage/01.png";

/**
 * CV Header: Contains the profile information and cover image.
 */
const Header = () => {
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
    imageSrc = profileImage,
  }) => {
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
     * Shows either an anonymous stripe background or the profile image
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
    <x.section display="flex" flexDirection="row" alignSelf="stretch">
      <x.div mr={pxW(28)}>
        <x.h1
          fontSize={pxB(18)}
          fontWeight="bolder"
          lineHeight={pxH(20)}
          mb={pxH(4)}
          letterSpacing="0"
        >
          Dino Scheidt
        </x.h1>
        <x.p
          fontSize={pxB(12)}
          lineHeight={pxH(12)}
          mb={pxH(4)}
          letterSpacing="0"
        >
          Senior Software Engineer
        </x.p>
        <x.p
          fontSize={pxB(12)}
          lineHeight={pxH(14)}
          my={pxH(12)}
          letterSpacing="-0.03em"
          textAlign="justify"
          fontStyle="italic"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dictum vehicula lectus, id vehicula est pharetra ac. Sed fermentum
          mauris non lorem vulputate, ac dictum dui commodo. Nullam ultrices
          suscipit justo, eu posuere erat ultrices eget. Curabitur at mollis
          risus, in consectetur est bla consectetur est bla .
        </x.p>
      </x.div>
      <CoverImage anonym />
    </x.section>
  );
};

export default Header;
