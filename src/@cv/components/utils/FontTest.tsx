import React from "react";

import { x } from "@xstyled/emotion";

import { pxB } from "@cv/views/DesignSystem";

// eslint-disable-next-line
const FontTest = () => (
  <x.div lineHeight={pxB(14)} fontSize={pxB(12)}>
    <x.p>Test: Default Font</x.p>
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

export default FontTest;
