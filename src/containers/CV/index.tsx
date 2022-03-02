import React from "react";

import styled, { x } from "@xstyled/emotion";

import DesignSystem, { pxB, pxH, pxW, sizeFromBase } from "./DesignSystem";

/**
 * Document constant for flex box pushing according to golden ratio.
 * Width 544px (34rem at 16px) = Long 366.21 + Short 207.790
 * Short ~208px (=13rem at 16px)
 */
const goldenRatioShortPX = pxW(208);

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
        <x.h4 fontSize={pxB(12)} fontWeight="bolder" display="inline-block">
          Keywords
        </x.h4>{" "}
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

  return (
    <x.h3
      h={pxH(28)}
      fontSize={pxB(16)}
      lineHeight={pxH(28)}
      fontWeight="normal"
    >
      {children}
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
 * CV Component: Topic Labeled List Item (two lines 2x14px)
 * List item for the topic section.
 */
const TopicLabeledListItem: React.FC<{ label?: string }> = ({
  label = "Empty Label",
  children = "This is a test to see if the line fits and does wrap to the next line for alignment.",
}) => {
  // TODO: This should be a shared configurable generic labeled list item component.
  return (
    <x.div
      h={sizeFromBase({ times: 2 })}
      display="flex"
      flexDirection="row"
      pt={pxH(4)}
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
      <TopicLabeledListItem label="React Native">
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
      pt={double ? pxH(1) : pxH(0)}
      pb={double ? pxH(3) : pxH(2)}
      display="flex"
      flexDirection="column"
      /* Debug */
      bg="yellow-300"
    >
      <x.p
        fontSize={pxH(10)}
        lineHeight={pxH(12)}
        /* FIXME: Ellipsis not showing. Overflow text is simply getting clipped */
        textOverflow="ellipsis"
        overflow="hidden"
        /* Debug */
        bg="blue-200"
      >
        {children}
      </x.p>
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
    alignItems="center"
    justifyContent="center"
    /* Debug */
    /* bg="yellow-100" */
  >
    <x.section
      w={goldenRatioShortPX}
      flex="none"
      /* Debug */
      /* bg="green-100" */
    >
      {/* START: Aside Container */}

      <SectionHeader>Qualification</SectionHeader>
      <Topic title="Software Engineering" />
      <Topic title="Product Architecture" />

      {/* END: Aside Container */}
    </x.section>
    {/* Right Side */}
    <x.main
      alignSelf="stretch"
      flexGrow="1"
      /* Debug */
      /* bg="blue-100" */
    >
      {/* START: Main Container */}

      <SectionHeader>Experience</SectionHeader>
      <ElementTitle subtitle="Software Engineer">Example Inc.</ElementTitle>
      <Caption>Since 2123 · Berlin, Germany</Caption>
      {/* END: Main Container */}
    </x.main>
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
            w={pxW(800)}
            h={pxH(1132)}
            /* Trim (A4) */
            px={pxW(128)}
            pt={pxH(128)}
            pb={pxH(64)}
            /* Box Model */
            display="flex"
            flexDirection="column"
            spaceY={pxH(16)}
          >
            {/* START: CV Sections */}

            <Header />
            <MetaSection />
            <MainSection />

            {/* END: CV Sections */}
            <x.div bg="gray-100">
              <FontTest />
            </x.div>
            <x.div bg="gray-100">
              <FontTest />
            </x.div>
          </x.div>
        </PageScale>
      </x.div>
    </DesignSystem>
  );
};

export default CV;
