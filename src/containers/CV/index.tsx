import React from "react";

import { x } from "@xstyled/emotion";

import DesignSystem from "./DesignSystem";

const FontTest = () => (
  <>
    <x.p fontWeight="lighter">Default, lighter</x.p>
    <x.p text="xl">Default</x.p>
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
          <x.div bg="red-200">
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
