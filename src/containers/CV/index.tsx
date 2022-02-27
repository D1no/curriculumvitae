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
        <x.p fontWeight="hairline">Test</x.p>
        <x.p fontWeight="thin">Test</x.p>
        <x.p fontWeight="light">Test</x.p>
        <x.p fontWeight="normal">Test</x.p>
        <x.p fontWeight="medium">Test</x.p>
        <x.p fontWeight="bold">Test</x.p>
        <x.p fontWeight="extrabold">Test</x.p>
        <x.p fontWeight="black">Test</x.p>
      </DesignSystem>
    </>
  );
};

export default CV;
