import React from "react";

import styled, { x } from "@xstyled/emotion";

import { ILayoutProps } from "containers/Layout/util";

import DesignSystem from "./DesignSystem";

/**
 * Document constant for flex box pushing according to golden ratio.
 * Width 544px (34rem at 16px) = Long 366.21 + Short 207.790
 * Short ~208px (=13rem at 16px)
 */
const goldenRatioShortPX = "208px";

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
  <x.header display="flex" flexDirection="row" alignSelf="stretch">
    <x.div mr="28px">
      <x.h1
        fontSize="18px"
        fontWeight="bolder"
        lineHeight="20px"
        mb="4px"
        letterSpacing="0"
      >
        Dino Scheidt
      </x.h1>
      <x.p fontSize="12px" lineHeight="12px" mb="4px" letterSpacing="0">
        Senior Software Engineer
      </x.p>
      <x.p
        fontSize="12px"
        lineHeight="14px"
        my="12px"
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
      h="136px"
      bg="pink-100"
      flexGrow="1"
      flex="none"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <x.div fontWeight="hairline" fontSize="18px">
        Cover Image
      </x.div>
    </x.div>
  </x.header>
);

/**
 * CV Meta Section: Contains quick infos and contact.
 */
const MetaSection = () => (
  <x.section
    display="flex"
    flexDirection="row"
    alignSelf="stretch"
    spaceX="36px"
    /* bg="yellow-100" */
    alignItems="center"
    justifyContent="center"
  >
    <x.div w={goldenRatioShortPX} flex="none" /* bg="green-100" */>
      {/* Left Side */}
      <x.p
        fontSize="10px"
        lineHeight="16px"
        fontStyle="italic"
        textAlign="justify"
        alignItems="center"
      >
        {/* Keywords */}
        <x.span fontSize="12px" fontWeight="bolder">
          Keywords:
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
          h="44px"
          w="88px"
          overflow="hidden"
          /* bg="green-200" */
        >
          {/* Single Icon */}
          {[...Array(7)].map((e, i) => (
            <x.div
              key={i}
              h="18px"
              w="18px"
              my="2px"
              mr="4px"
              /* Debug */
              bg="blue-500"
              /* TODO: Decide if the icons should have highlighting. If so, box shadow is probably better. */
              borderRadius
              border="1px"
              borderStyle="solid"
              borderColor="blue-600"
              /* Text Style Inside Icon*/
              fontSize="12px"
              lineHeight="12px"
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
        fontSize="10px"
        fontStyle="italic"
        lineHeight="16px"
        display="flex"
        spaceX="16px"
        pr="12px"
      >
        {/* Contact */}
        <x.div flexGrow={1} textAlign="right">
          <x.p fontSize="12px" fontWeight="bolder">
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
      fontSize="18px"
      lineHeight="28px"
      letterSpacing="0"
      textTransform="uppercase"
    >
      {children}
    </x.h2>
  );
};

/**
 * CV Component: Topic Header
 */
const TopicHeader: React.FC<{}> = ({ children }) => {
  return (
    <x.h2 fontSize="16px" lineHeight="28px" fontWeight="bolder">
      {children}
    </x.h2>
  );
};

/**
 * CV Component: Topic Body
 */
const TopicBody: React.FC<{}> = ({ children }) => {
  return (
    <x.p fontSize="12px" lineHeight="14px" textAlign="justify">
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
      h="28px"
      display="flex"
      flexDirection="row"
      pt="4px"
      fontSize="10px"
      lineHeight="12px"
      /* FIXME: Ellipsis not showing. Overflow text is simply getting clipped */
      textOverflow="ellipsis"
      overflow="hidden"
    >
      <x.div
        fontSize="8px"
        lineHeight="10px"
        w="28px"
        mt="2px"
        mr="2px"
        ml="6px"
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
      <TopicHeader>{title}</TopicHeader>
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
      <TopicLabeledListItem />
      <TopicLabeledListItem />
      <TopicLabeledListItem />
      <TopicLabeledListItem />
    </>
  );
};

/**
 * CV Main Section: Contains Aside Section and Main Container
 */
const MainSection = () => (
  <x.section
    display="flex"
    flexDirection="row"
    alignSelf="stretch"
    spaceX="36px"
    alignItems="center"
    justifyContent="center"
    /* Debug */
    /* bg="yellow-100" */
  >
    <x.div
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
    </x.div>
    {/* Right Side */}
    <x.div
      alignSelf="stretch"
      flexGrow="1"
      /* Debug */
      /* bg="blue-100" */
    >
      {/* START: Main Container */}

      <SectionHeader>Experience</SectionHeader>
      <Topic title="Software Engineering" />
      <Topic title="Product Architecture" />

      {/* END: Main Container */}
    </x.div>
  </x.section>
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
            w="800px"
            h="1132px"
            /* Trim (A4) */
            px="128px"
            pt="128px"
            pb="64px"
            /* Box Model */
            display="flex"
            flexDirection="column"
            spaceY="16px"
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
