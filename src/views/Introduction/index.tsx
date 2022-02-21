import React from "react";

import { x } from "@xstyled/emotion";

import { ILayoutProps, L } from "containers/Layout/util";

const Introduction: React.FC<ILayoutProps> = ({ debug = false, ...props }) => {
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
              Access to my <x.span color="hs-gold">CV & Resume</x.span>.
            </x.h1>
            <x.p
              fontWeight="light"
              lineHeight="relaxed"
              text="sm"
              textAlign="justify"
            >
              This application is currently being updated.
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

export default Introduction;
