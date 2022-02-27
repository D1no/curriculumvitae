import React from "react";

import { x } from "@xstyled/emotion";

import DesignSystem from "./DesignSystem";

interface ICVProps {}

// TODO: Lato Fonts are not aligned with font weight categories
// https://stackoverflow.com/a/33456739
// https://xstyled.dev/docs/font-weight/#font-weights
const CV: React.FunctionComponent<ICVProps> = (props) => {
  return (
    <>
      <DesignSystem>
        <x.p fontWeight="lighter">Default, lighter</x.p>
        <x.p>Default</x.p>
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
      </DesignSystem>
    </>
  );
};

export default CV;
