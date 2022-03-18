import React from "react";

import styled, { useColor, x } from "@xstyled/emotion";

import { goldenRatioShortPX, pxB, pxH, pxW } from "@cv/views/DesignSystem";

import accentureLogo from "@cv/assets/orgLogo/accenture.png";
import dexisLogo from "@cv/assets/orgLogo/dexis.png";
import everphoneLogo from "@cv/assets/orgLogo/everphone.png";
import flLogo from "@cv/assets/orgLogo/fl.png";
import googleLogo from "@cv/assets/orgLogo/google.png";
import shopkickLogo from "@cv/assets/orgLogo/shopkick.png";
import siemensLogo from "@cv/assets/orgLogo/siemens.png";
import solyticLogo from "@cv/assets/orgLogo/solytic.png";

interface MetaSection {
  /**
   * Anonymized mode. I.e. contact information is hidden and company icons are placeholders.
   */
  anonym?: boolean;
  /**
   * Tag label inside the CV. I.e. "Keywords" followed by the tags. This is also the heading of the tags subsection.
   */
  tagLabel?: string;
  /**
   * Array of tags listed inline after the tag label.
   */
  tags?: string[];
  /**
   * Separation between tags. Default ", " (comma and space)
   */
  tagsSeparator?: string;
  /**
   * In case no tags are provided. Default: "" (empty string).
   */
  tagsEmptyText?: string;
}

/**
 * CV Meta Section: Contains quick infos and contact.
 */
const MetaSection: React.FC<MetaSection> = ({
  anonym = false,
  tagLabel = "Tags Label",
  tags = [
    "Tag",
    "Another Tag",
    "Keyword Tag",
    "Important Tag",
    "Tag",
    "Another Tag",
    "Keyword Tag",
    "Important Tag",
    "Tag",
    "Another Tag",
    "Keyword Tag",
    "Important Tag",
    "Tag",
  ],
  tagsSeparator = ", ",
  tagsEmptyText = "",
}) => {
  /**
   * Takes tags and returns a concatenated string.
   */
  const getTagList = (
    tags: MetaSection["tags"],
    tagsSeparator: MetaSection["tagsSeparator"],
    tagsEmptyText: MetaSection["tagsEmptyText"],
  ): string => {
    if (!tags) {
      // No tags found.
      return tagsEmptyText ?? "";
    } else {
      let listString = "";

      // Concatenating the tags
      tags.forEach((tag: string, i) => {
        // Add separator only if not beginning of list
        listString += i === 0 ? "" : tagsSeparator;
        // Add tag to list
        listString += tag;
      });

      return listString;
    }
  };

  /**
   * Renders small logo icons used in the meta section.
   */
  const OrgLogoGallery: React.FC<{
    orgLogos?: [{ imageSrc: string; orgName: string }];
    showPlaceholders?: boolean;
  }> = ({
    orgLogos: orgIcons = [
      { imageSrc: googleLogo, orgName: "Google" },
      { imageSrc: accentureLogo, orgName: "Accenture" },
      { imageSrc: dexisLogo, orgName: "Dexis" },
      { imageSrc: siemensLogo, orgName: "Siemens" },
      { imageSrc: flLogo, orgName: "FoundersLane" },
      { imageSrc: everphoneLogo, orgName: "Everphone" },
      { imageSrc: solyticLogo, orgName: "Solytic" },
      { imageSrc: shopkickLogo, orgName: "Shopkick" },
    ],
    showPlaceholders = false,
  }) => {
    // FIXME StripedBackGround: Code duplicate of CoverImage (!)
    const lightStripe = useColor("white-a100");
    const darkStripe = useColor("cv-decor-a50");
    const messageBg = useColor("white");
    const messageText = darkStripe;
    // TODO Remove or destructure placeholder org logos
    if (showPlaceholders) {
      // Striped Background
      const AnonymOrgLogos = styled(x.div)`
        background: repeating-linear-gradient(
          45deg,
          ${lightStripe},
          ${lightStripe} 2px,
          ${darkStripe} 2px,
          ${darkStripe} 4px
        );
      `;

      return (
        <>
          {[...Array(8)].map((e, i) => (
            <AnonymOrgLogos
              key={i}
              h={pxH(18)}
              w={pxW(18)}
              my={pxH(2)}
              mr={pxW(4)}
              /* TODO: Decide if the icons should have highlighting. If so, box shadow is probably better. */
              borderRadius
              /* Text Style Inside Icon*/
              fontSize={pxB(12)}
              lineHeight={pxH(12)}
              textAlign="center"
              fontWeight="light"
              color={messageText}
              /* Center Number*/
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* <x.p display="inline-block" verticalAlign="middle">
                {i + 1}
              </x.p> */}
            </AnonymOrgLogos>
          ))}
        </>
      );
    }

    return (
      <>
        {orgIcons.map(({ imageSrc, orgName }, i) => (
          <x.div
            key={i}
            h={pxH(18)}
            w={pxW(18)}
            my={pxH(2)}
            mr={pxW(4)}
            /* TODO: Decide if the icons should have highlighting. If so, box shadow is probably better. */
            borderRadius={pxB(3)}
            overflow="hidden"
            /* Center Number*/
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <x.img src={imageSrc} alt={orgName} h={pxH(18)} w={pxW(18)} />
          </x.div>
        ))}
      </>
    );
  };

  return (
    <x.div
      display="flex"
      flexDirection="row"
      alignSelf="stretch"
      spaceX={pxW(36)}
      /* bg="yellow-100" */
      alignItems="center"
      justifyContent="center"
    >
      <x.div w={goldenRatioShortPX} flex="none" /* bg="green-100" */>
        {/* Left Side */}
        <x.p
          fontSize={pxB(10)}
          lineHeight={pxH(16)}
          fontStyle="italic"
          textAlign="justify"
          alignItems="center"
        >
          {/* Keywords */}
          {/* TODO: Accessibility this should be a header but outside of the p tag. */}
          <x.span fontSize={pxB(12)} fontWeight="bolder" display="inline-block">
            {tagLabel}
          </x.span>{" "}
          {getTagList(tags, tagsSeparator, tagsEmptyText)}
        </x.p>
      </x.div>
      {/* Right Side */}
      <x.div
        /* bg="blue-100" */
        alignSelf="stretch"
        flexGrow="1"
        display="flex"
        alignItems="center"
      >
        {/* Icons Container */}
        <x.div /* bg="orange-100" */ flexGrow={1}>
          <x.div
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            alignContent="flex-start"
            /* TODO: Items can overflow container, this just visually limits them to 8 */
            h={pxH(44)}
            w={pxW(88)}
            overflow="hidden"
            /* bg="green-200" */
          >
            {/* Single Icon */}
            <OrgLogoGallery showPlaceholders={anonym} />
          </x.div>
        </x.div>
        <x.div
          w={goldenRatioShortPX}
          /* bg="purple-100" */
          flex="none"
          fontSize={pxB(10)}
          fontStyle="italic"
          lineHeight={pxH(16)}
          display="flex"
          spaceX={pxW(16)}
          pr={pxW(12)}
        >
          {/* Contact */}
          <x.div flexGrow={1} textAlign="right">
            <x.p fontSize={pxB(12)} fontWeight="bolder">
              +4915123456789
            </x.p>
            <x.p>verylonglongna@gmail.com</x.p>
            <x.p>Berlin, Germany (GMT+1)</x.p>
          </x.div>
          {/* Social */}
          <x.div /* bg="blue-100" */>
            <x.p>LinkedIn (link)</x.p>
            <x.p>GitHub (link)</x.p>
            <x.p>Website (link)</x.p>
          </x.div>
        </x.div>
      </x.div>
    </x.div>
  );
};

export default MetaSection;
