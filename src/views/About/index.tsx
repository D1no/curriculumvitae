import React, { useState } from "react";

import { x } from "@xstyled/emotion";

import { ILayoutProps, L } from "containers/Layout/util";

const About: React.FC<ILayoutProps> = ({ debug = false, ...props }) => {
  // TODO: Integrated into FixedBottom implementation.
  //       This reports the innerheight which is updated on each resize event.
  //       It is working on iOS 12 up to latest and likely the solution for
  //       the bottom navigation in iOS.
  //       Related: https://stackoverflow.com/a/43575432
  const [innerHeight, setInnerHeight] = useState(0);

  window.onresize = function () {
    setInnerHeight(window.innerHeight);
  };

  if (innerHeight === 0) {
    setInnerHeight(window.innerHeight);
  }

  return (
    <L debug={debug}>
      <x.div display="flex">
        <L debug={debug}>
          <x.div col={2 / 12}></x.div>
        </L>
        <L debug={debug}>
          <x.div col>
            <x.h1
              fontWeight="light"
              lineHeight="normal"
              mb={6}
              mt={6}
              text="xl"
              // TODO: This should probably be calculated. Is based on the number 0 of the font.
              maxWidth="23ch"
            >
              Test iOS Accessibility Scaling
            </x.h1>
            <x.p
              fontWeight="light"
              lineHeight="relaxed"
              text="sm"
              textAlign="justify"
            >
              innerWidth: {window.innerWidth}px <br />
              outerWidth: {window.outerWidth}px <br />
              screen.width: {window.screen.width}px <br /> <br />
              innerHeight: {innerHeight}px <br />
              outerHeight: {window.outerHeight}px <br />
              screen.height: {window.screen.height}px <br /> <br />
              computed Font Size:{" "}
              {getComputedStyle(document.documentElement).fontSize} <br />
              root size Element: {
                document.getElementById("root")?.offsetWidth
              }{" "}
              <br />
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              <br />
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              <br />
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              <br />
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              <br />
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              <br />
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              <br />
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              <br />
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              <br />
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
            </x.p>
          </x.div>
        </L>
        <L debug={debug}>
          <x.div col={1 / 12}></x.div>
        </L>
      </x.div>
    </L>
  );
};

export default About;
