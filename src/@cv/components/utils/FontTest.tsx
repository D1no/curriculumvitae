import React from "react";

import { x } from "@xstyled/emotion";

import { pxB } from "@cv/views/DesignSystem";

interface FontTest {
  sampleText: string;
  /**
   * Number will be scaled by DesignSystem via `pxB()`.
   */
  fontSize: number;
  /**
   * Number will be scaled by DesignSystem via `pxB()`.
   */
  lineHeight: number;
}

/**
 * Demo showcasing font mapping.
 */
const FontTest: React.FC<FontTest> = ({
  sampleText = "Test",
  fontSize = 12,
  lineHeight = 14,
}) => (
  <x.div lineHeight={pxB(lineHeight)} fontSize={pxB(fontSize)}>
    <x.p>{sampleText} (default Font)</x.p>
    <x.p>----</x.p>
    <x.p fontWeight="hairline">{sampleText} (hairline)</x.p>
    <x.p fontWeight="thin">{sampleText} (thin)</x.p>
    <x.p fontWeight="light">{sampleText} (light)</x.p>
    <x.p fontWeight="normal">{sampleText} (normal)</x.p>
    <x.p fontWeight="medium">{sampleText} (medium)</x.p>
    <x.p fontWeight="semibold">{sampleText} (semibold)</x.p>
    <x.p fontWeight="bold">{sampleText} (bold)</x.p>
    <x.p fontWeight="extrabold">{sampleText} (extrabold)</x.p>
    <x.p fontWeight="black">{sampleText} (black)</x.p>
  </x.div>
);

export default FontTest;
