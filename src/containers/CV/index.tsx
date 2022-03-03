import React from "react";

import styled, { x } from "@xstyled/emotion";

import DesignSystem, {
  goldenRatioGridStep,
  goldenRatioLongSection,
  goldenRatioPageHeight,
  goldenRatioPageMargin,
  goldenRatioPageWidth,
  goldenRatioShortPX,
  pxB,
  pxBraw,
  pxH,
  pxW,
  sizeFromBase,
} from "./DesignSystem";

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
const Header = () => (
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum
        vehicula lectus, id vehicula est pharetra ac. Sed fermentum mauris non
        lorem vulputate, ac dictum dui commodo. Nullam ultrices suscipit justo,
        eu posuere erat ultrices eget. Curabitur at mollis risus, in consectetur
        est bla consectetur est bla .
      </x.p>
    </x.div>
    <x.div
      w={goldenRatioShortPX}
      h={pxH(136)}
      bg="pink-100"
      flexGrow="1"
      flex="none"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <x.div fontWeight="hairline" fontSize={pxB(18)}>
        Cover Image
      </x.div>
    </x.div>
  </x.section>
);

/**
 * CV Meta Section: Contains quick infos and contact.
 */
const MetaSection = () => (
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
          {[...Array(7)].map((e, i) => (
            <x.div
              key={i}
              h={pxH(18)}
              w={pxW(18)}
              my={pxH(2)}
              mr={pxW(4)}
              /* Debug */
              bg="blue-500"
              /* TODO: Decide if the icons should have highlighting. If so, box shadow is probably better. */
              borderRadius
              border={pxW(1)}
              borderStyle="solid"
              borderColor="blue-600"
              /* Text Style Inside Icon*/
              fontSize={pxB(12)}
              lineHeight={pxH(12)}
              textAlign="center"
              fontWeight="light"
              color="white"
              /* Center Number*/
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <x.p display="inline-block" verticalAlign="middle">
                {i + 1}
              </x.p>
            </x.div>
          ))}
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
          <x.p>http://mywebsite.com</x.p>
        </x.div>
        {/* Social */}
        <x.div /* bg="blue-100" */>
          <x.p>LinkedIn (link)</x.p>
          <x.p>Company (link)</x.p>
          <x.p>GitHub (link)</x.p>
        </x.div>
      </x.div>
    </x.div>
  </x.section>
);

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
        lineHeight={pxH(10)}
        w={pxW(28)}
        mt={pxH(2)}
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
        lineHeight={pxH(10)}
        /* TODO: This should depend on the golden ratio since the label pushes content to the right,
        which vertically aligns with the profile summary text block end.  */
        w={pxW(44)}
        mt={pxH(2)}
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

/**
 * CV Element: Table as labeled list.
 */
const TableLabeledList = () => {
  const widthFirstLabel = 5.5 * goldenRatioGridStep; // 44
  const widthSecondLabel = 6 * goldenRatioGridStep; // 48
  const widthDetail =
    goldenRatioLongSection - widthFirstLabel - widthSecondLabel;

  const LabeledRow = () => {
    return (
      <x.tr h={pxH(14)} maxHeight={pxH(14)} py={pxH(1)} whiteSpace="nowrap">
        <x.td
          w={pxW(widthFirstLabel)}
          maxWidth={pxW(widthFirstLabel)}
          fontSize={pxB(8)}
          lineHeight={pxB(8)}
          pt={pxH(2)}
          pl={pxW(6)}
          pr={pxW(2)}
          fontWeight="bolder"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          2018/11
        </x.td>
        <x.td
          w={pxW(widthSecondLabel)}
          maxWidth={pxW(widthSecondLabel)}
          fontSize={pxB(8)}
          lineHeight={pxB(8)}
          pt={pxH(2)}
          pr={pxW(2)}
          fontWeight="bolder"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          Publication
        </x.td>
        <x.td
          w={pxW(widthDetail)}
          maxWidth={pxW(widthDetail)}
          fontSize={pxB(10)}
          lineHeight={pxB(10)}
          textOverflow="ellipsis"
          overflow="hidden"
        >
          Was erwartet der Kunde im Omnichannel?
        </x.td>
      </x.tr>
    );
  };

  return (
    <x.div /* bg="green-100" */ display="flex" flexDirection="column">
      <x.table
        tableLayout="auto"
        fontSize={pxB(10)}
        lineHeight={pxB(10)}
        textAlign="left"
        textOverflow="ellipsis"
        overflow="hidden"
        verticalAlign="top"
        cellSpacing="0"
        cellPadding="0"
        border="none"
      >
        {/* TODO: Continues here. Box not modeled yet. */}
        <thead>
          <x.tr display="none">
            <x.th w={pxH(44)}>Date</x.th>
            <x.th w={pxH(40)}>Type</x.th>
            <x.th>Topic</x.th>
          </x.tr>
        </thead>
        <tbody>
          <LabeledRow />
          <LabeledRow />
          <LabeledRow />
          <LabeledRow />
        </tbody>
      </x.table>
    </x.div>
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
    spaceX={pxW(36)}
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
        <TableLabeledList />
        {/* END: Labeled List Table */}
      </x.section>
      {/* END: Honours & Media  */}
    </x.div>
  </x.div>
);

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
          transformOrigin="50%% 0%"
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
            pb={pxH(goldenRatioPageMargin / 2)}
            /* Box Model */
            display="flex"
            flexDirection="column"
            spaceY={pxH(16)}
          >
            {/* START: CV Sections */}

            <Header />
            <MetaSection />
            <MainSection />
          </x.div>
        </PageScale>
      </x.div>
    </DesignSystem>
  );
};

export default CV;
