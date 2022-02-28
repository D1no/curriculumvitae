import React from "react";

import { x } from "@xstyled/emotion";

import DesignSystem from "./DesignSystem";

const FontTest = () => (
  <>
    <x.h1 fontSize="1.125em" fontWeight="bolder" lineHeight="1.25" mb="0.25em">
      Dino Scheidt
    </x.h1>
    <x.p fontSize="0.75em" lineHeight="0.75em" mb="0.25em">
      Senior Software Engineer
    </x.p>
    <x.p fontSize="0.75em" lineHeight="1.16em" my="1.16em">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum
      vehicula lectus, id vehicula est pharetra ac. Sed fermentum mauris non
      lorem vulputate, ac dictum dui commodo. Nullam ultrices suscipit justo, eu
      posuere erat ultrices eget. Curabitur at mollis risus, in consectetur est
      bla consectetur est bla .
    </x.p>
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
  </>
);

interface ICVProps {}

const CV: React.FC<ICVProps> = (props) => {
  return (
    <DesignSystem>
      <x.div mx="auto" boxShadow="page">
        {/* TODO: Add scaling scale logic here */}
        <x.div
          bg="white"
          color="black"
          /* Page Dimensions (A4) */
          w="50em"
          h="70.75em"
          /* Trim (A4) */
          px="8em"
          pt="8em"
          pb="4em"
          /* Box Model */
          display="flex"
          flexDirection="column"
          spaceY={4}
        >
          <x.div>
            <FontTest />
          </x.div>
          <x.div bg="red-200">
            <FontTest />
          </x.div>
          <x.div bg="red-200">
            <FontTest />
          </x.div>
        </x.div>
      </x.div>
    </DesignSystem>
  );
};

export default CV;
