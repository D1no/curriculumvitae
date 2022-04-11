import React from "react";

import styled, { useColor, x } from "@xstyled/emotion";

import { goldenRatioShortPX, pxB, pxH, pxW } from "@cv/views/DesignSystem";

interface Meta {
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
  /**
   * Contact Details
   */
  contact?: {
    /**
     * Contact phone number
     */
    phone?: string;
    /**
     * Contact email
     */
    email?: string;
    /**
     * Contact location / timezone. I.e. "Berlin, Germany (GMT+1)"
     */
    locationShort?: string;
  };
  /**
   * Social Contacts. Only the first 3 are rendered.
   */
  web?: {
    /**
     * Short text of the platform. I.e. "LinkedIn", "Twitteer", "Website" etc.
     */
    shortName: string;
    /**
     * Text behind short name in "()" Default ("link").
     */
    linkText?: string;
    /**
     * URL to the resource (http...). Opens in a new window on click.
     */
    linkSrc: string;
  }[];
  /**
   * Up to 8 logos shown
   */
  orgLogos?: { imageSrc: string; orgName: string }[];
}

/**
 * CV Meta Section: Contains quick infos and contact.
 */
const Meta: React.FC<Meta> = ({
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
  contact: {
    phone = "Phone",
    email = "email",
    locationShort = "locationShort",
  } = {},
  web: [web1, web2, web3] = [],
  orgLogos,
}) => {
  /**
   * Takes tags and returns a concatenated string.
   */
  const getTagList = (
    tags: Meta["tags"],
    tagsSeparator: Meta["tagsSeparator"],
    tagsEmptyText: Meta["tagsEmptyText"],
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
   * Renders small org logo icons used in the meta section. Displays placeholders instead if set to true
   */
  const OrgLogoGallery: React.FC<{
    orgLogos?: Meta["orgLogos"];
    showPlaceholders?: boolean;
  }> = ({ orgLogos, showPlaceholders = false }) => {
    // FIXME StripedBackGround: Code duplicate of CoverImage (!)
    const lightStripe = useColor("white-a100");
    const darkStripe = useColor("cv-decor-a50");
    const messageBg = useColor("white");
    const messageText = darkStripe;
    const maxNumberOfLogos = 8;
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
          {/* TODO: Decide if we always want to show 8 anonymous org logos or if we want to match the number of the input or randomize it. */}
          {[...Array(maxNumberOfLogos)].map((e, i) => (
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
              {/* Option for Text inside Placeholders. */}
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
        {orgLogos
          ?.slice(0, maxNumberOfLogos)
          ?.map(({ imageSrc, orgName }, i) => (
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
            <OrgLogoGallery showPlaceholders={anonym} orgLogos={orgLogos} />
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
              {phone}
            </x.p>
            <x.p>{email}</x.p>
            <x.p>{locationShort}</x.p>
          </x.div>
          {/* Social */}
          <x.div /* bg="blue-100" */>
            {/* TODO: This needs to be extracted and links be over loadable via a router. */}
            {/* TODO: Collapses Flexbox when empty. Decide how to handle. */}
            {web1 ? (
              <x.p>
                {web1.shortName} (
                <x.a href={web1.linkSrc} target="_blank">
                  {web1.linkText ?? "link"}
                </x.a>
                )
              </x.p>
            ) : undefined}
            {web2 ? (
              <x.p>
                {web2.shortName} (
                <x.a href={web2.linkSrc} target="_blank">
                  {web2.linkText ?? "link"}
                </x.a>
                )
              </x.p>
            ) : undefined}
            {web3 ? (
              <x.p>
                {web3.shortName} (
                <x.a href={web3.linkSrc} target="_blank">
                  {web3.linkText ?? "link"}
                </x.a>
                )
              </x.p>
            ) : undefined}
          </x.div>
        </x.div>
      </x.div>
    </x.div>
  );
};

export default Meta;
