import React from "react";

import { x } from "@xstyled/emotion";

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
      <x.h1 fontSize="18px" fontWeight="bolder" lineHeight="20px" mb="4px">
        Dino Scheidt
      </x.h1>
      <x.p fontSize="12px" lineHeight="12px" mb="4px">
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
    bg="yellow-100"
    alignItems="center"
    justifyContent="center"
  >
    <x.div w={goldenRatioShortPX} flex="none" bg="green-100">
      <x.p
        fontSize="10px"
        lineHeight="16px"
        fontStyle="italic"
        textAlign="justify"
      >
        <x.span fontSize="12px" fontWeight="bolder">
          Keywords:
        </x.span>{" "}
        Front-End, Back-End, ReactJS, React-Native, Artificial Intelligence,
        Node.js, Python, CQRS, Microsoft, Google, Azure, Dask, Ray, Digital
        Twins
      </x.p>
    </x.div>
    <x.div bg="blue-100" alignSelf="stretch" flexGrow="1" display="flex">
      <x.div bg="orange-100" flexGrow={1}>
        Icons
      </x.div>
      <x.div w={goldenRatioShortPX} bg="purple-100" flex="none">
        contact
      </x.div>
    </x.div>
  </x.section>
);

interface ICVProps {}

const CV: React.FC<ICVProps> = (props) => {
  return (
    <DesignSystem>
      <x.div boxShadow="page" display="flex" justifyContent="center">
        {/* TODO: Add proper scaling logic here */}
        <x.div transform transformOrigin="50%% 0%" h="0" scale="1">
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
            <Header />
            <MetaSection />
            <x.div bg="gray-100">
              <FontTest />
            </x.div>
            <x.div bg="gray-100">
              <FontTest />
            </x.div>
          </x.div>
        </x.div>
      </x.div>
    </DesignSystem>
  );
};

export default CV;
