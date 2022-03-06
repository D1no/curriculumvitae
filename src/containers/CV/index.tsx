import QRCode from "qrcode.react";

import React from "react";

import styled, { css, useColor, x } from "@xstyled/emotion";

import profileImage from "assets/design/profileImage/01.png";
import accentureLogo from "assets/orgLogo/accenture.png";
import dexisLogo from "assets/orgLogo/dexis.png";
import everphoneLogo from "assets/orgLogo/everphone.png";
import flLogo from "assets/orgLogo/fl.png";
import googleLogo from "assets/orgLogo/google.png";
import shopkickLogo from "assets/orgLogo/shopkick.png";
import siemensLogo from "assets/orgLogo/siemens.png";
import solyticLogo from "assets/orgLogo/solytic.png";

import DesignSystem, {
  goldenRatioContentSpacer,
  goldenRatioContentSpacerPX,
  goldenRatioElementSpacer,
  goldenRatioGridStep,
  goldenRatioLongSection,
  goldenRatioPageHeight,
  goldenRatioPageMargin,
  goldenRatioPageWidth,
  goldenRatioSectionSpacerPX,
  goldenRatioShortPX,
  pxB,
  pxBraw,
  pxH,
  pxW,
  sizeFromBase,
  theme,
} from "./DesignSystem";

// eslint-disable-next-line
const FontTest = () => (
  <x.div>
    <x.p fontWeight="bolder">Default, bolder</x.p>
    <x.p>----</x.p>
    <x.p fontWeight="hairline">Test: hairline</x.p>
    <x.p fontWeight="thin">Test: thin</x.p>
    <x.p fontWeight="light">Test: light</x.p>
    <x.p fontWeight="normal">Test: normal</x.p>
    <x.p fontWeight="medium">Test: medium</x.p>
    <x.p fontWeight="semibold">Test: semibold</x.p>
    <x.p fontWeight="bold">Test: bold</x.p>
    <x.p fontWeight="extrabold">Test: extrabold</x.p>
    <x.p fontWeight="black">Test: black</x.p>
  </x.div>
);

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

/**
 * CV Meta Section: Contains quick infos and contact.
 */
const MetaSection = () => {
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
    showPlaceholders = true,
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
    <x.section
      aria-label="Information"
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
            Keywords
          </x.span>{" "}
          Front-End, Back-End, ReactJS, React-Native, Artificial Intelligence,
          Node.js, Python, CQRS, Microsoft, Google, Azure, Dask, Ray, Digital
          Twins
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
            <OrgLogoGallery />
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
    </x.section>
  );
};

/**
 * CV Component: Section Header
 */
const SectionHeader: React.FC<{}> = ({ children }) => {
  return (
    <x.h2
      fontSize={pxB(18)}
      lineHeight={pxH(28)}
      letterSpacing="0"
      textTransform="uppercase"
    >
      {children}
    </x.h2>
  );
};

/**
 * CV Component: Element Header. Use
 */
const ElementTitle: React.FC<{ subtitle?: string }> = ({
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

/**
 * CV Component: Topic Body
 */
const TopicBody: React.FC<{}> = ({ children }) => {
  return (
    <x.p fontSize={pxB(12)} lineHeight={pxH(14)} textAlign="justify">
      {children}
    </x.p>
  );
};

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

/**
 * CV Container: Topic
 */
const Topic: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <ElementTitle>{title}</ElementTitle>
      <TopicBody>
        Contributor of TypeScript to React Static (+5k GitHub Stars). Once
        created a react mobile framework that server side renders for a
        financial institution. Developing in react native by bridging iOS and
        Android with detail to CI, gdc efforts & teaching.
      </TopicBody>
      <TopicLabeledListItem label="React Native" double>
        This is a test to see if the line fits and correctly wraps to the next
        line.
      </TopicLabeledListItem>
    </>
  );
};

/**
 * CV Component: Caption. The small text usually under titles.
 */
const Caption: React.FC<{
  double?: boolean;
}> = ({ double = false, children }) => {
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

const Remark: React.FC<{ body?: string; small?: boolean }> = ({
  body,
  small = false,
  children,
}) => {
  return (
    <x.div display="flex">
      {/* Left Decor Section */}
      <x.div
        w={pxW(14)}
        flexShrink="0"
        py={pxH(2)}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* Vertical Line next to content. Can't directly use SVG as
          background image in CRA, so this will do. */}
        <x.div
          bg="cv-decor"
          flexGrow="1"
          w={pxW(1)}
          borderRadius="full"
        ></x.div>
      </x.div>
      <x.div
        color="cv-muted"
        lineHeight={pxB(14)}
        fontSize={small ? pxB(10) : pxB(12)}
      >
        {body ? <x.div textAlign="justify">{body}</x.div> : undefined}
        {children}
      </x.div>
    </x.div>
  );
};
/**
 *
 *
 */

const Record: React.FC<{}> = () => {
  return (
    <>
      <ElementTitle subtitle="Software Engineer">Example Inc.</ElementTitle>
      <Caption>Since 2123 · Berlin, Germany</Caption>
      <Remark
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum vehicula lectus, id vehicula est pharetra ac. Sed fermentum
            mauris non lorem vulputate, ac dictum dui commodo. Nullam ultrices
            suscipit justo, eu auris"
      >
        <RemarkLabeledListItem label="Solution & Technology" double>
          This is a test to see if the line fits and correctly wraps to the next
          line.
        </RemarkLabeledListItem>
      </Remark>
    </>
  );
};

type tableLabeledRow = {
  label1?: string;
  label2?: string;
  subject?: string;
  remark?: string;
  detailed?: boolean;
};

/**
 * CV Element: Table as labeled list.
 */
const TableLabeledList: React.FC<{
  showHeader?: boolean;
  columnNames?: [string, string, string];
  rows?: tableLabeledRow[];
}> = ({
  showHeader = false,
  columnNames = ["column1", "column2", "column3"],
  rows = [
    {
      label1: "label1",
      label2: "label2",
      subject: "subject",
    },
  ],
}) => {
  // Column names
  const [column1, column2, column3] = columnNames;

  // Sizing Constants
  const widthFirstLabel = 5.5 * goldenRatioGridStep; // 44
  const widthSecondLabel = 6 * goldenRatioGridStep; // 48
  const widthContentColumn =
    goldenRatioLongSection - widthFirstLabel - widthSecondLabel;

  const label1Indent = 6;
  const label2Indent = 2;

  /**
   * Row for a three column table. I.e. time, type, subject with an option (detailed = true) to show
   * an additional 0.5 line remark under the content of the last column (i.e. remark under subject). */
  const LabeledRow: React.FC<tableLabeledRow> = ({
    detailed,
    label1 = "label1",
    label2 = "label2",
    subject = "subject",
    remark,
    // <- Readability: Destructuring done here to get properties directly. Potentially confusing for beginners.
  }) => {
    // Automatically show remark if no instruction given and remark available
    if (detailed === undefined && remark !== undefined) {
      detailed = true;
    }

    /**
     *  Label style used in first and second column. */
    const Label: React.FC<{}> = ({ children }) => {
      return (
        <x.span
          pt={pxH(2)}
          fontSize={pxB(8)}
          lineHeight={pxB(8)}
          fontWeight="bolder"
        >
          {children}
        </x.span>
      );
    };

    /**
     *  Third column Subject content */
    const SubjectLine: React.FC<{}> = ({ children }) => {
      return <x.span>{children}</x.span>;
    };

    /**
     *  Second line in smaller font under Subject */
    const RemarkLine: React.FC<{ show?: boolean }> = ({
      children,
      show = detailed,
    }) => {
      if (!show) return <></>;

      return (
        <>
          <x.span
            fontStyle="italic"
            color="cv-muted"
            fontSize={pxB(8)}
            lineHeight={pxB(8)}
            mt={pxH(1)}
            display="block"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {children}
          </x.span>
        </>
      );
    };

    return (
      <x.tr
        h={pxH(detailed ? 21 : 14)}
        maxHeight={pxH(detailed ? 21 : 14)}
        display="block"
        pt={pxH(1)}
        pb={pxH(1)}
        whiteSpace="nowrap"
        verticalAlign="baseline"
      >
        <x.td
          w={pxW(widthFirstLabel)}
          maxWidth={pxW(widthFirstLabel)}
          pl={pxW(label1Indent)}
          pr={pxW(2)}
          textOverflow="ellipsis"
          overflow="hidden"
        >
          <Label>{label1}</Label>
        </x.td>
        <x.td
          w={pxW(widthSecondLabel)}
          maxWidth={pxW(widthSecondLabel)}
          pr={pxW(label2Indent)}
          textOverflow="ellipsis"
          overflow="hidden"
        >
          <Label>{label2}</Label>
        </x.td>
        <x.td
          w={pxW(widthContentColumn)}
          maxWidth={pxW(widthContentColumn)}
          fontSize={pxB(10)}
          lineHeight={pxB(detailed ? 10 : 12)}
          textOverflow="ellipsis"
          overflow="hidden"
        >
          <SubjectLine>{subject}</SubjectLine>
          <RemarkLine>{remark}</RemarkLine>
        </x.td>
      </x.tr>
    );
  };

  return (
    <x.table
      tableLayout="auto"
      fontSize={pxB(10)}
      lineHeight={pxB(10)}
      textAlign="left"
      verticalAlign="top"
      border="none"
      cellSpacing="0"
      cellPadding="0"
      textOverflow="ellipsis"
      overflow="hidden"
    >
      {/* TODO: Continues here. Box not modeled yet. */}
      <thead>
        <x.tr
          display={showHeader ? "block" : "none"}
          // Style
          fontSize={pxB(8)}
          lineHeight={pxB(10)}
          fontStyle="italic"
          // Box Model
          h={pxH(12)}
          borderBottom="1px solid"
          borderColor="cv-decor"
          maxHeight={pxH(12)}
          mb={pxH(1)}
          whiteSpace="nowrap"
          verticalAlign="baseline"
        >
          <x.th
            fontWeight="normal"
            color="cv-muted"
            // Box Model
            w={pxW(widthFirstLabel)}
            maxWidth={pxW(widthFirstLabel)}
            pl={pxW(label1Indent)}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {column1}
          </x.th>
          <x.th
            fontWeight="normal"
            color="cv-muted"
            // Box Model
            w={pxW(widthSecondLabel)}
            maxWidth={pxW(widthSecondLabel)}
            pr={pxW(label2Indent)}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {column2}
          </x.th>
          <x.th
            fontWeight="normal"
            color="cv-muted"
            // Box Model
            w={pxW(widthContentColumn)}
            maxWidth={pxW(widthContentColumn)}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {column3}
          </x.th>
        </x.tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <LabeledRow
            key={i}
            label1={row.label1}
            label2={row.label2}
            subject={row.subject}
            remark={row.remark}
            detailed={row.detailed}
          />
        ))}
      </tbody>
    </x.table>
  );
};

/**
 * CV Main Section: Contains Aside Section and Main Container
 */
const MainSection = () => (
  <x.div
    display="flex"
    flexDirection="row"
    alignSelf="stretch"
    spaceX={goldenRatioSectionSpacerPX}
    justifyContent="center"
    /* Debug */
    /* bg="yellow-100" */
  >
    <x.div
      w={goldenRatioShortPX}
      flex="none"
      spaceY={pxH(14)}
      /* Debug */
      /* bg="green-100" */
    >
      {/* START: Aside Container */}

      {/* Qualification */}
      <x.section>
        <SectionHeader>Qualification</SectionHeader>
        <Topic title="Software Engineering" />
        <Topic title="Product Architecture" />
      </x.section>

      {/* Education */}
      <x.section>
        <SectionHeader>Education</SectionHeader>
        <ElementTitle subtitle="St. Petersburg Russia">GSOM</ElementTitle>
        <Caption double>
          2015 · Ranked #1 in Russia. Term of courses in finance & teaching
          programmatic marketing.
        </Caption>
        <TopicLabeledListItem label="Major">
          Information Systems
        </TopicLabeledListItem>
        <TopicLabeledListItem label="Focus" double>
          This is a test to see if the line fits and correctly wraps to the next
          line.
        </TopicLabeledListItem>
        <TopicLabeledListItem label="GPA">
          1.6 (scale 1 to 5; 1.0 best); top 11%
        </TopicLabeledListItem>
        <Remark
          small
          body="Patroned to a scholarship by the board in the field of Digital Transformation."
        />
        <Caption>Since 2123 · Berlin, Germany</Caption>
        <TopicLabeledListItem label="AI / ML Field" double>
          This is a test to see if the line fits and correctly wraps to the next
          line.
        </TopicLabeledListItem>
        <Remark
          small
          body="Patroned to a scholarship by the board in the field of Digital Transformation."
        />
        <Caption>Since 2123 · Berlin, Germany</Caption>
        <Remark
          small
          body="Patroned to a scholarship by the board in the field of Digital Transformation."
        />
      </x.section>
      {/* END: Education */}

      {/* END: Aside Container */}
    </x.div>
    {/* Right Side */}

    <x.div spaceY={pxH(14)}>
      {/* START: Experience / Main Container */}
      {/* FIXME: Safari Reader - When the main container is inside here, safari reader mode isn't recognized. */}
      <x.main
      /* Debug */
      /* bg="blue-100" */
      >
        <SectionHeader>Experience</SectionHeader>
        <Record />
        <ElementTitle subtitle="Software Engineer" />
        <Caption>Since 2123 · Berlin, Germany</Caption>
        <Record />
        <Record />
      </x.main>
      {/* END: Experience / Main Container */}

      {/* START: Honours & Media  */}
      <x.section

      /* Debug */
      /* bg="blue-100" */
      >
        <SectionHeader>Honours & Media</SectionHeader>
        {/* START: Labeled List Table */}
        <TableLabeledList
          columnNames={["Data", "Format", "Topic / Remark"]}
          rows={[
            {
              label1: "2018/02",
              label2: "Speaker",
              subject: "Bridging Augmented Reality & React Native",
            },
            {
              label1: "2018/11",
              label2: "Article",
              subject: "Was erwartet der Kunde im Omnichannel?",
            },
            {
              label1: "2018/04",
              label2: "Speaker",
              subject: "ReactJS in the Enterprise",
              remark: "Atlasian Inc. / Mind Space Berlin",
            },
            {
              label1: "2018/02",
              label2: "Speaker",
              subject: "Bridging Augmented Reality & React Native",
              remark: "React Day Berlin",
            },
            {
              label1: "2018/02",
              label2: "Speaker",
              subject: "Bridging Augmented Reality & React Native",
              remark: "React Day Berlin",
            },
          ]}
        />
        {/* END: Labeled List Table */}
      </x.section>
      {/* END: Honours & Media  */}
    </x.div>
  </x.div>
);

const FooterSection: React.FC<{}> = () => {
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
            Qualitative Interpretation (Harvey Ball)
          </x.p>
        </x.div>
      </x.div>
    </x.div>
  );
};

/**
 * Animation for responsiveness.
 */
const PageScale = styled(x.div)`
  transition: all 0.3s ease-in-out;
`;

interface ICVProps {}

const CV: React.FC<ICVProps> = (props) => {
  return (
    <DesignSystem>
      <x.div boxShadow="page" display="flex" justifyContent="center">
        {/* TODO: Add proper scaling logic here */}
        <PageScale
          transform
          transformOrigin={
            // TODO: Scaling in dev shouldn't be different. -> Storybook
            process.env.NODE_ENV === "development" ? "75% 0%" : "50% 0%"
          }
          h="0"
          /* TODO: Discriminate between iphone mini and iphone max style phones. */
          scale={{ _: "0.45", sm: "0.75", md: "0.9", lg: "1", xl: "1.4" }}
        >
          <x.div
            bg="white"
            color="black"
            /* Page Dimensions (A4) */
            w={pxW(goldenRatioPageWidth)}
            h={pxH(goldenRatioPageHeight)}
            /* Trim (A4) */
            px={pxW(goldenRatioPageMargin)}
            pt={pxH(goldenRatioPageMargin)}
            pb={pxH(goldenRatioContentSpacer)}
            /* Box Model */
            display="flex"
            flexDirection="column"
            spaceY={pxH(goldenRatioElementSpacer)}
          >
            {/* START: CV Sections */}

            <Header />
            <MetaSection />
            <MainSection />

            {/* Footer */}
            <FooterSection />
            {/* END: Footer */}
            {/* END: CV Sections */}
          </x.div>
        </PageScale>
      </x.div>
    </DesignSystem>
  );
};

export default CV;
